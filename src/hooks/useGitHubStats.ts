import { useEffect, useState } from 'react'

type Stats = {
  publicRepos: number | null
  followers: number | null
  following: number | null
  stars: number | null
}

type Status = 'loading' | 'live' | 'error'

const initialStats: Stats = {
  publicRepos: null,
  followers: null,
  following: null,
  stars: null,
}

export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<Stats>(initialStats)
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    let cancelled = false

    async function load() {
      setStatus('loading')

      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: 'application/vnd.github+json' },
          }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`, {
            headers: { Accept: 'application/vnd.github+json' },
          }),
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API request failed')
        }

        const user = await userRes.json()
        const repos = await reposRes.json()
        const stars = Array.isArray(repos)
          ? repos.reduce((sum: number, repo: { stargazers_count?: number }) => sum + (repo.stargazers_count ?? 0), 0)
          : null

        if (!cancelled) {
          setStats({
            publicRepos: typeof user.public_repos === 'number' ? user.public_repos : null,
            followers: typeof user.followers === 'number' ? user.followers : null,
            following: typeof user.following === 'number' ? user.following : null,
            stars,
          })
          setStatus('live')
        }
      } catch {
        if (!cancelled) {
          setStats(initialStats)
          setStatus('error')
        }
      }
    }

    load()
    return () => { cancelled = true }
  }, [username])

  return { ...stats, status }
}
