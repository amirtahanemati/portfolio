import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n'
import { GitHubMark } from './BrandMarks'
import { LanguageSwitch } from './LanguageSwitch'

export function Nav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const links = [
    [t.nav.about, '#about'],
    [t.nav.work, '#work'],
    [t.nav.stack, '#stack'],
    [t.nav.contact, '#contact'],
  ]

  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label={t.nav.primaryNavigation}>
        <a className="brand latin" href="#top" aria-label={`AMIRTAHA — ${t.nav.backToTop}`}>
          AMIRTAHA<span>®</span>
        </a>

        <div className="nav__links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>

        <div className="nav__right">
          <LanguageSwitch compact />
          <div className="nav__socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="latin">
              <span className="linkedin-mark">in</span><span>LinkedIn</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="latin">
              <GitHubMark size={17} /><span>GitHub</span>
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
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span className="mobile-nav__index latin">0{index + 1}</span>
              <span>{label}</span>
            </a>
          ))}
          <div className="mobile-nav__external latin">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              LinkedIn <ArrowUpRight size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              GitHub <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
