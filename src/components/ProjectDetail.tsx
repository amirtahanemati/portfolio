import { useEffect } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Download,
  ExternalLink,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useRouter } from '../context/RouterContext'
import { projects, type Project } from '../data/portfolio'
import { toPersianDigits, useLanguage } from '../i18n'
import { GitHubMark } from './BrandMarks'

interface ProjectDetailProps {
  slug: string
}

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const { lang, t } = useLanguage()
  const { navigate } = useRouter()

  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project: Project | undefined = projects[projectIndex]

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1]
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) {
      document.title =
        lang === 'fa'
          ? `${project.title.fa} | امیرطاها نعمتی`
          : `${project.title.en} | Amirtaha Nemati Portfolio`
    }
  }, [slug, lang, project])

  if (!project) {
    return (
      <div className="project-detail shell not-found">
        <div className="not-found__box">
          <h2>{lang === 'fa' ? 'پروژه مورد نظر یافت نشد' : 'Project Not Found'}</h2>
          <p>{lang === 'fa' ? 'متاسفانه پروژه درخواستی شما وجود ندارد.' : 'The requested project could not be found.'}</p>
          <button
            type="button"
            className="button button--accent"
            onClick={() => navigate('/')}
          >
            {t.projectDetail.backToProjects}
          </button>
        </div>
      </div>
    )
  }

  const isRtl = lang === 'fa'
  const isMyketProject = project.slug === 'course-selection'
  const isNemroProject = project.slug === 'nemro'

  return (
    <article className="project-detail shell" id="project-top">
      {/* Background ambient orb */}
      <div className="hero__orb" aria-hidden="true" />

      {/* Top Header & Breadcrumbs */}
      <nav className="project-detail__nav" aria-label="Project Breadcrumbs">
        <button
          type="button"
          className="project-detail__back-btn"
          onClick={() => navigate('/#work')}
          data-cursor="active"
        >
          {isRtl ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          <span>{t.projectDetail.backToProjects}</span>
        </button>

        <div className="project-detail__breadcrumbs">
          <button type="button" onClick={() => navigate('/')}>{t.projectDetail.breadcrumbHome}</button>
          <span className="breadcrumb-separator">/</span>
          <button type="button" onClick={() => navigate('/#work')}>{t.projectDetail.breadcrumbProjects}</button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{project.name}</span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="project-detail__header">
        <div className="project-detail__badges">
          <span className="project-detail__index latin">PROJECT {project.index}</span>
          <span className="project-detail__category">{project.category[lang]}</span>
          <span className="project-detail__accent latin">{project.accent}</span>
          {isMyketProject && (
            <span className="project-detail__myket-pill">
              <Star size={13} fill="currentColor" />
              <span>{t.projectDetail.ratingBadge}</span>
            </span>
          )}
          {isNemroProject && (
            <a
              href="https://nemro.ir"
              target="_blank"
              rel="noreferrer"
              className="project-detail__nemro-pill"
              title={t.projectDetail.clickToOpenSite}
            >
              <span className="live-pulse-dot" />
              <Globe size={13} />
              <span>{t.projectDetail.liveVerifiedBadge}</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>

        <motion.h1
          className="project-detail__title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {project.title[lang]}
        </motion.h1>

        <motion.p
          className="project-detail__tagline"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {project.tagline[lang]}
        </motion.p>

        {/* Primary Action Buttons */}
        <div className="project-detail__actions">
          {project.links.map((link) => {
            const isMyket = link.type === 'myket'
            const isGithub = link.type === 'github'

            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`button ${link.primary ? 'button--accent' : 'button--ghost'} ${isMyket ? 'button--myket' : ''}`}
                data-cursor="active"
              >
                {isMyket && <Download size={18} />}
                {isGithub && <GitHubMark size={18} />}
                {!isMyket && !isGithub && <ExternalLink size={18} />}
                <span>{link.label[lang]}</span>
                <ArrowUpRight size={16} />
              </a>
            )
          })}
        </div>
      </header>

      {/* Main Visual Showcase Banner */}
      <motion.div
        className={`project-detail__banner ${isNemroProject ? 'project-detail__banner--nemro-live' : ''}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isNemroProject && (
          <div className="browser-mockup-bar" dir="ltr">
            <div className="browser-mockup-dots" aria-hidden="true">
              <span className="mockup-dot mockup-dot--red" />
              <span className="mockup-dot mockup-dot--yellow" />
              <span className="mockup-dot mockup-dot--green" />
            </div>

            <div className="browser-mockup-address">
              <ShieldCheck size={14} className="address-icon" />
              <span className="address-url latin">https://nemro.ir</span>
              <span className="address-live-tag latin">{t.projectDetail.browserLivePill}</span>
            </div>

            <a
              href="https://nemro.ir"
              target="_blank"
              rel="noreferrer"
              className="browser-mockup-action"
              title={t.projectDetail.clickToOpenSite}
            >
              <span>{isRtl ? 'ورود به سامانه' : 'Visit Live'}</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        )}

        <a
          href={isNemroProject ? "https://nemro.ir" : undefined}
          target={isNemroProject ? "_blank" : undefined}
          rel={isNemroProject ? "noreferrer" : undefined}
          className={`project-detail__banner-visual ${isNemroProject ? 'project-detail__banner-visual--interactive' : ''}`}
          dir="ltr"
          title={isNemroProject ? t.projectDetail.clickToOpenSite : undefined}
        >
          <img
            src={project.image}
            alt={project.name}
            className="project-detail__banner-image"
            loading="eager"
            fetchPriority="high"
          />
          <div className="project-detail__banner-overlay" />
          <div className="project-detail__banner-index latin">{project.index}</div>

          {isNemroProject && (
            <div className="project-detail__live-cta-overlay">
              <div className="live-cta-pill">
                <span className="live-pulse-dot" />
                <span>{t.projectDetail.clickToOpenSite}</span>
                <ExternalLink size={15} />
              </div>
            </div>
          )}

          {project.logo && (
            <div className="project-detail__banner-logo">
              <img src={project.logo} alt="" />
            </div>
          )}
        </a>
      </motion.div>

      {/* Quick Facts & Stats Bar */}
      <section className="project-detail__quickfacts">
        <div className="quickfacts__meta">
          <div className="quickfact-item">
            <span className="quickfact-label">{t.projectDetail.myRole}</span>
            <strong className="quickfact-value">{project.role[lang]}</strong>
          </div>
          <div className="quickfact-item">
            <span className="quickfact-label">{t.projectDetail.timeline}</span>
            <strong className="quickfact-value">{project.timeline[lang]}</strong>
          </div>
          <div className="quickfact-item">
            <span className="quickfact-label">{t.projectDetail.status}</span>
            <strong className="quickfact-value">{project.status[lang]}</strong>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="quickfacts__stats">
          {project.stats.map((stat) => (
            <div className="project-stat-card" key={stat.label.en}>
              <strong className="project-stat-value latin">
                {isRtl ? toPersianDigits(stat.value) : stat.value}
              </strong>
              <span className="project-stat-label">{stat.label[lang]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* In-depth Narrative / Overview */}
      <section className="project-detail__section project-detail__overview">
        <div className="section-heading">
          <span className="section-eyebrow latin">01 // NARRATIVE</span>
          <h2>{lang === 'fa' ? 'درباره پروژه و حل مسئله' : 'Project Vision & Purpose'}</h2>
        </div>
        <div className="project-detail__copy">
          <p>{project.overview[lang]}</p>
        </div>
      </section>

      {/* Key Features & Innovations */}
      <section className="project-detail__section project-detail__features">
        <div className="section-heading">
          <span className="section-eyebrow latin">02 // FEATURES</span>
          <h2>{t.projectDetail.keyHighlights}</h2>
        </div>
        <div className="features-grid">
          {project.features.map((feature, i) => (
            <div
              className="feature-card"
              key={feature.title.en}
            >
              <div className="feature-card__top">
                <div className="feature-card__icon">
                  {i === 0 && <Sparkles size={20} />}
                  {i === 1 && <Layers size={20} />}
                  {i === 2 && <ShieldCheck size={20} />}
                  {i === 3 && <Cpu size={20} />}
                  {i > 3 && <CheckCircle2 size={20} />}
                </div>
                {feature.tag && <span className="feature-card__tag latin">{feature.tag}</span>}
              </div>
              <h3 className="feature-card__title">{feature.title[lang]}</h3>
              <p className="feature-card__description">{feature.description[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture & Engineering Deep-Dive */}
      <section className="project-detail__section project-detail__architecture">
        <div className="section-heading">
          <span className="section-eyebrow latin">03 // ARCHITECTURE</span>
          <h2>{t.projectDetail.architecture}</h2>
        </div>

        <div className="architecture-box">
          <p className="architecture-text">{project.architecture.content[lang]}</p>
          <div className="tech-chips-wrap">
            <span className="tech-chips-label">{t.projectDetail.techStack}:</span>
            <div className="tech-chips" dir="ltr">
              {project.tech.map((tItem) => (
                <span className="tech-chip latin" key={tItem}>
                  {tItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenges Overcome */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="project-detail__section project-detail__challenges">
          <div className="section-heading">
            <span className="section-eyebrow latin">04 // CHALLENGES</span>
            <h2>{t.projectDetail.challenges}</h2>
          </div>
          <div className="challenges-list">
            {project.challenges.map((challenge, i) => (
              <div className="challenge-item" key={challenge.title.en}>
                <div className="challenge-index latin">0{i + 1}</div>
                <div className="challenge-content">
                  <h3>{challenge.title[lang]}</h3>
                  <p>{challenge.content[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Release Milestones & History Table */}
      {project.milestones && project.milestones.length > 0 && (
        <section className="project-detail__section project-detail__milestones">
          <div className="section-heading">
            <span className="section-eyebrow latin">05 // RELEASES</span>
            <h2>{t.projectDetail.milestones}</h2>
          </div>
          <div className="milestones-table-wrap">
            <table className="milestones-table">
              <thead>
                <tr>
                  <th>{t.projectDetail.versionHeader}</th>
                  <th>{t.projectDetail.dateHeader}</th>
                  <th>{t.projectDetail.changeHeader}</th>
                </tr>
              </thead>
              <tbody>
                {project.milestones.map((m) => (
                  <tr key={m.version}>
                    <td className="version-cell latin">{m.version}</td>
                    <td className="date-cell">{m.date[lang]}</td>
                    <td className="desc-cell">
                      <strong>{m.title[lang]}</strong>
                      <p>{m.description[lang]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Next / Previous Project Navigation */}
      <footer className="project-detail__footer">
        <div className="project-pagination">
          <button
            type="button"
            className="pagination-card pagination-card--prev"
            onClick={() => navigate(`/projects/${prevProject.slug}`)}
            data-cursor="active"
          >
            <span className="pagination-sub">
              {isRtl ? <ArrowRight size={14} /> : <ArrowLeft size={14} />} {t.projectDetail.prevProject}
            </span>
            <strong className="pagination-title">{prevProject.name}</strong>
          </button>

          <button
            type="button"
            className="pagination-card pagination-card--next"
            onClick={() => navigate(`/projects/${nextProject.slug}`)}
            data-cursor="active"
          >
            <span className="pagination-sub">
              {t.projectDetail.nextProject} {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </span>
            <strong className="pagination-title">{nextProject.name}</strong>
          </button>
        </div>

        {/* Contact CTA */}
        <div className="project-detail__cta">
          <div className="project-detail__cta-copy">
            <h3>{t.projectDetail.ctaTitle}</h3>
          </div>
          <button
            type="button"
            className="button button--accent"
            onClick={() => navigate('/#contact')}
            data-cursor="active"
          >
            <span>{t.projectDetail.ctaButton}</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </footer>
    </article>
  )
}
