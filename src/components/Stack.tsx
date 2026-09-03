import { motion } from 'motion/react'
import { skillGroups } from '../data/portfolio'
import { useLanguage } from '../i18n'
import { SectionIntro } from './SectionIntro'

export function Stack() {
  const { lang, t } = useLanguage()

  return (
    <section className="section shell" id="stack">
      <SectionIntro number="03" eyebrow={t.stack.eyebrow} title={t.stack.title} />
      <div className="stack-grid">
        {skillGroups.map((group, i) => (
          <motion.div
            className="stack-card"
            key={group.label.en}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * .06 }}
          >
            <span className="stack-card__num latin">0{i + 1}</span>
            <h3>{group.label[lang]}</h3>
            <ul dir="ltr">
              {group.items.map((item) => <li className="latin" key={item}>{item}<span>↗</span></li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
