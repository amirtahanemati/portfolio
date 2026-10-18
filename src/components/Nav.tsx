import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useRouter } from '../context/RouterContext'
import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n'
import { GitHubMark } from './BrandMarks'
import { LanguageSwitch } from './LanguageSwitch'

export function Nav() {
  const [open, setOpen] = useState(false)
  const { lang, t } = useLanguage()
  const { navigate, isProjectPage } = useRouter()

  const links = [
    [t.nav.about, '#about'],
    [t.nav.work, '#work'],
    [t.nav.honors, '#honors'],
    [t.nav.stack, '#stack'],
    [t.nav.contact, '#contact'],
  ]

  const isRtl = lang === 'fa'

  const handleLinkClick = (href: string) => {
    setOpen(false)
    navigate(href)
  }

  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label={t.nav.primaryNavigation}>
        <div className="nav__brand-group">
          <button
            type="button"
            className="brand latin"
            onClick={() => navigate('/')}
            aria-label={`AMIRTAHA — ${t.nav.backToTop}`}
          >
            AMIRTAHA<span>®</span>
          </button>

          {isProjectPage && (
            <button
              type="button"
              className="nav__project-back-pill"
              onClick={() => navigate('/#work')}
              data-cursor="active"
            >
              {isRtl ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
              <span>{t.nav.backToHome}</span>
            </button>
          )}
        </div>

        <div className="nav__links">
          {links.map(([label, href]) => (
            <button
              key={href}
              type="button"
              className="nav__link-btn"
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="nav__right">
          <LanguageSwitch compact />
          <div className="nav__socials">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="latin"
            >
              <span className="linkedin-mark">in</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="latin"
            >
              <GitHubMark size={17} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <button
          type="button"
          className="nav__menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <motion.div
        className="mobile-nav"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mobile-nav__inner shell">
          <div className="mobile-nav__language">
            <span>{t.nav.language}</span>
            <LanguageSwitch />
          </div>

          {isProjectPage && (
            <button
              type="button"
              className="mobile-nav__back-home"
              onClick={() => handleLinkClick('/')}
            >
              {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              <span>{t.nav.backToHome}</span>
            </button>
          )}

          {links.map(([label, href], index) => (
            <button
              key={href}
              type="button"
              className="mobile-nav__link-btn"
              onClick={() => handleLinkClick(href)}
            >
              <span className="mobile-nav__index latin">0{index + 1}</span>
              <span>{label}</span>
            </button>
          ))}

          <div className="mobile-nav__external latin">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              LinkedIn <ArrowUpRight size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              GitHub <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
