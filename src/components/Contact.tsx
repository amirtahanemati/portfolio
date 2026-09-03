import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n'

export function Contact() {
  const { lang, t } = useLanguage()

  return (
    <section className="contact" id="contact">
      <div className="shell contact__inner">
        <div className="contact__meta">
          <span><b className="latin">04</b> / {t.contact.eyebrow}</span>
          <span>{t.contact.question}</span>
        </div>

        <motion.a
          className="contact__headline"
          href={`mailto:${profile.email}`}
          whileHover={{ x: lang === 'fa' ? -10 : 10 }}
        >
          {t.contact.line1}<br /><span>{t.contact.line2}</span><ArrowUpRight />
        </motion.a>

        <div className="contact__channels">
          <a href={`tel:${profile.phone}`}>
            <span className="contact__channel-icon"><Phone size={17} /></span>
            <span><small>{t.contact.phone}</small><b className="latin" dir="ltr">{profile.phoneDisplay}</b></span>
          </a>
          <a href={`mailto:${profile.email}`}>
            <span className="contact__channel-icon"><Mail size={17} /></span>
            <span><small>{t.contact.email}</small><b className="latin" dir="ltr">{profile.email}</b></span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="contact__channel-icon contact__channel-mark latin">in</span>
            <span><small>{t.contact.linkedin}</small><b className="latin" dir="ltr">amirtahanemati</b></span>
          </a>
        </div>

        <div className="contact__footer">
          <span className="latin">© 2026 AMIRTAHA NEMATI</span>
          <div className="socials latin">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GH — GitHub">GH</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="IG — Instagram">IG</a>
            <a href={profile.x} target="_blank" rel="noreferrer" aria-label="X">X</a>
          </div>
          <a className="contact__call latin" dir="ltr" href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
        </div>
      </div>
    </section>
  )
}
