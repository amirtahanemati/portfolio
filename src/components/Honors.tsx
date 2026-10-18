import { ArrowUpRight, Award, ExternalLink, Medal, Newspaper, Trophy, Users } from 'lucide-react'
import { motion } from 'motion/react'
import { honors, pressMentions } from '../data/portfolio'
import { useLanguage } from '../i18n'
import { SectionIntro } from './SectionIntro'

export function Honors() {
  const { lang, t } = useLanguage()

  return (
    <section className="section shell" id="honors">
      <SectionIntro number="03" eyebrow={t.honors.eyebrow} title={t.honors.title} />

      {/* Main Honors Cards */}
      <div className="honors-grid">
        {honors.map((honor, index) => {
          const isSilver = honor.medal === 'silver'

          return (
            <motion.div
              key={honor.id}
              className={`honor-card honor-card--${honor.medal}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              data-cursor="active"
            >
              <div className="honor-card__glow" aria-hidden="true" />

              <div className="honor-card__header">
                <div className="honor-card__badge-wrap">
                  <div className={`honor-medal-badge honor-medal-badge--${honor.medal}`}>
                    {isSilver ? <Medal size={18} /> : <Award size={18} />}
                    <span>{honor.rank[lang]}</span>
                  </div>
                  <span className="honor-card__date">{honor.date[lang]}</span>
                </div>
                <div className="honor-card__icon-watermark" aria-hidden="true">
                  <Trophy size={110} />
                </div>
              </div>

              <div className="honor-card__body">
                <h3 className="honor-card__title">{honor.title[lang]}</h3>

                <div className="honor-card__meta">
                  <div className="honor-meta-row">
                    <span className="honor-meta-label">{t.honors.organizerLabel}</span>
                    <span className="honor-meta-value">{honor.organizer[lang]}</span>
                  </div>
                  <div className="honor-meta-row">
                    <span className="honor-meta-label">
                      <Users size={14} /> {t.honors.teamLabel}
                    </span>
                    <span className="honor-meta-value honor-team-name">{honor.team[lang]}</span>
                  </div>
                </div>

                <p className="honor-card__description">{honor.description[lang]}</p>

                {/* Tags */}
                <div className="honor-card__tags">
                  {honor.tags.map((tag) => (
                    <span key={tag} className="honor-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* News & Official Links */}
                <div className="honor-card__links">
                  {honor.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="honor-link"
                    >
                      <ExternalLink size={14} />
                      <span>{link.title[lang]}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Press Coverage & In The News */}
      <motion.div
        className="press-coverage-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="press-coverage__header">
          <div className="press-coverage__title-box">
            <Newspaper size={20} className="press-coverage__icon" />
            <div>
              <h3>{t.honors.pressTitle}</h3>
              <p>{t.honors.pressSubtitle}</p>
            </div>
          </div>
        </div>

        <div className="press-mentions-grid">
          {pressMentions.map((press) => (
            <a
              key={press.name}
              href={press.url}
              target="_blank"
              rel="noreferrer"
              className="press-mention-card"
              data-cursor="active"
            >
              <div className="press-mention__top">
                <span className="press-mention__badge">{press.badge}</span>
                <ArrowUpRight size={16} className="press-mention__arrow" />
              </div>
              <strong className="press-mention__name">{press.name}</strong>
              <p className="press-mention__label">{press.label[lang]}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
