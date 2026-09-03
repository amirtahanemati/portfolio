import { motion } from 'motion/react'
import { useGitHubStats } from '../hooks/useGitHubStats'
import { toPersianDigits, useLanguage } from '../i18n'

export function Stats() {
  const stats = useGitHubStats('amirtahanemati')
  const { lang, t } = useLanguage()

  const formatStat = (value: number | null) => {
    if (value === null) return '—'
    const formatted = String(value).padStart(2, '0')
    return lang === 'fa' ? toPersianDigits(formatted) : formatted
  }

  const items = [
    [t.stats.repos, stats.publicRepos],
    [t.stats.stars, stats.stars],
    [t.stats.followers, stats.followers],
    [t.stats.following, stats.following],
  ] as const

  const sourceLabel = stats.status === 'live'
    ? t.stats.live
    : stats.status === 'loading'
      ? t.stats.loading
      : t.stats.error

  return (
    <section className="stats-wrap shell" aria-label={t.stats.aria}>
      <div className="stats__source">
        <span className={`stats__status stats__status--${stats.status}`} />
        <span>{sourceLabel}</span>
      </div>
      <div className="stats">
        {items.map(([label, value], i) => (
          <motion.div
            className="stat"
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <strong className="stat__number">{formatStat(value)}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
