import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'

export type Route =
  | { type: 'home' }
  | { type: 'project'; slug: string }

interface RouterContextType {
  route: Route
  navigate: (to: string) => void
  isProjectPage: boolean
  currentSlug: string | null
}

const RouterContext = createContext<RouterContextType | null>(null)

function parsePath(pathname: string, hash: string): Route {
  // Check hash first: e.g. #/projects/nemro or #projects/nemro
  const cleanHash = hash.replace(/^#\/?/, '')
  const hashMatch = cleanHash.match(/^projects?\/([a-zA-Z0-9_-]+)/i)
  if (hashMatch) {
    return { type: 'project', slug: hashMatch[1] }
  }

  // Check pathname: e.g. /projects/nemro or /project/nemro
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '')
  const pathMatch = cleanPath.match(/^projects?\/([a-zA-Z0-9_-]+)/i)
  if (pathMatch) {
    return { type: 'project', slug: pathMatch[1] }
  }

  // Check query params: e.g. ?project=nemro
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const projectParam = params.get('project')
    if (projectParam) {
      return { type: 'project', slug: projectParam }
    }
  }

  return { type: 'home' }
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<Route>(() => {
    if (typeof window === 'undefined') return { type: 'home' }
    return parsePath(window.location.pathname, window.location.hash)
  })

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parsePath(window.location.pathname, window.location.hash))
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
    }
  }, [])

  const navigate = (to: string) => {
    if (to === '/' || to === '' || to === '#top') {
      window.history.pushState(null, '', '/')
      setRoute({ type: 'home' })
      window.scrollTo(0, 0)
      return
    }

    if (to.startsWith('#') || to.startsWith('/#')) {
      const anchor = to.replace(/^\//, '')
      if (route.type === 'project') {
        window.history.pushState(null, '', '/' + anchor)
        setRoute({ type: 'home' })
        window.scrollTo(0, 0)
        setTimeout(() => {
          const el = document.querySelector(anchor)
          el?.scrollIntoView({ behavior: 'smooth' })
        }, 50)
      } else {
        const el = document.querySelector(anchor)
        el?.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    const nextRoute = parsePath(to, '')
    if (nextRoute.type === 'project') {
      const url = new URL(window.location.href)
      url.pathname = `/projects/${nextRoute.slug}`
      url.hash = ''
      window.history.pushState(null, '', url.pathname + url.search)
      setRoute(nextRoute)
      window.scrollTo(0, 0)
    } else {
      window.history.pushState(null, '', to)
      setRoute(nextRoute)
      window.scrollTo(0, 0)
    }
  }

  const value = useMemo<RouterContextType>(() => ({
    route,
    navigate,
    isProjectPage: route.type === 'project',
    currentSlug: route.type === 'project' ? route.slug : null,
  }), [route])

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}
