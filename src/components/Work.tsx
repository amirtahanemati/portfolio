import { ArrowUpRight, Download, Eye, Globe, Star } from 'lucide-react'
import { motion } from 'motion/react'
import { useRouter } from '../context/RouterContext'
import { projects } from '../data/portfolio'
import { useLanguage } from '../i18n'
import { GitHubMark } from './BrandMarks'
import { SectionIntro } from './SectionIntro'

export function Work() {
  const { lang, t } = useLanguage()
  const { navigate } = useRouter()

  return (
    <section className="section shell" id="work">
      <SectionIntro number="02" eyebrow={t.work.eyebrow} title={t.work.title} />

      <div className="projects">
        {projects.map((project, i) => {
          const isMyketProject = project.slug === 'course-selection'
          const isNemroProject = project.slug === 'nemro'

          return (
            <motion.div
              className={`project ${isMyketProject ? 'project--featured-myket' : ''} ${isNemroProject ? 'project--featured-nemro' : ''}`}
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              {/* Visual Card Media */}
              <div
                className="project__visual"
                dir="ltr"
                onClick={() => navigate(`/projects/${project.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    navigate(`/projects/${project.slug}`)
                  }
                }}
                data-cursor="active"
              >
                {project.image ? (
                  <img
                    className="project__image"
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="project__noise" />
                    <div className="project__monogram latin">
                      {project.name.split(' ').map((word) => word[0]).slice(0, 3).join('')}
                    </div>
                  </>
                )}

                <div className="project__index latin">{project.index}</div>
                <div className="project__accent latin">{project.accent}</div>

                {isMyketProject && (
                  <div className="project__highlight-badge">
                    <Star size={13} fill="currentColor" />
                    <span>{t.work.publishedOnMyket}</span>
                  </div>
                )}

                {isNemroProject && (
                  <div className="project__highlight-badge project__highlight-badge--nemro">
                    <span className="live-pulse-dot" />
                    <span>{t.work.liveStatusBadge}</span>
                  </div>
                )}

                <div className="project__overlay-action">
                  <span>{t.work.viewCaseStudy}</span>
                  <ArrowUpRight className="project__arrow" size={26} />
                </div>
              </div>

              {/* Project Info & Description */}
              <div className="project__info">
                <div className="project__category-pill">
                  <span>{project.category[lang]}</span>
                </div>

                <h3
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="project__title-link"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      navigate(`/projects/${project.slug}`)
                    }
                  }}
                  data-cursor="active"
                >
                  {project.name}
                </h3>

                <motion.p
                  key={`${project.name}-${lang}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {project.description[lang]}
                </motion.p>

                {/* Tech Chips */}
                <div className="project__tech" dir="ltr">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span className="latin" key={tech}>
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="latin project__tech--more">+{project.tech.length - 5}</span>
                  )}
                </div>

                {/* Direct Action Links Bar */}
                <div className="project__action-links">
                  <button
                    type="button"
                    className="button button--accent project__case-study-btn"
                    onClick={() => navigate(`/projects/${project.slug}`)}
                    data-cursor="active"
                  >
                    <Eye size={16} />
                    <span>{t.work.viewCaseStudy}</span>
                    <ArrowUpRight size={16} />
                  </button>

                  {isNemroProject && (
                    <a
                      href="https://nemro.ir"
                      target="_blank"
                      rel="noreferrer"
                      className="button button--nemro-live"
                      data-cursor="active"
                      title={lang === 'fa' ? 'ورود مستقیم به وب‌سایت زنده نمرو (nemro.ir)' : 'Visit nemro.ir live website'}
                    >
                      <Globe size={16} />
                      <span>{t.work.visitNemroLive}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  {isMyketProject && (
                    <a
                      href="https://myket.ir/app/com.amirtaha.courseselection"
                      target="_blank"
                      rel="noreferrer"
                      className="button button--myket"
                      data-cursor="active"
                      title={t.work.viewOnMyket}
                    >
                      <Download size={16} />
                      <span>{t.work.viewOnMyket}</span>
                    </a>
                  )}

                  {project.links.some((l) => l.type === 'github') && (
                    <a
                      href={project.links.find((l) => l.type === 'github')?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="button button--ghost project__github-btn latin"
                      data-cursor="active"
                      title={t.work.viewOnGithub}
                    >
                      <GitHubMark size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
