import { Send } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '../data/portfolio'
import { useLanguage } from '../i18n'

export function TelegramBanner() {
  const { t } = useLanguage()

  return (
    <section className="section shell" id="telegram">
      <motion.a
        className="tg-banner"
        href={profile.telegram}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .3 }}
        transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}
        data-cursor="active"
      >
        <div className="tg-banner__visual" dir="ltr">
          <div className="tg-banner__glow" />
          <span className="tg-banner__ring">
            <Send size={30} strokeWidth={1.6} />
          </span>
        </div>

        <div className="tg-banner__info">
          <span className="tg-banner__eyebrow">{t.telegram.eyebrow}</span>
          <h3>{t.telegram.title}</h3>
          <p>{t.telegram.copy}</p>
          <span className="tg-banner__cta">
            {t.telegram.cta}
            <b className="latin" dir="ltr">{profile.telegramHandle}</b>
          </span>
        </div>
      </motion.a>
    </section>
  )
}
