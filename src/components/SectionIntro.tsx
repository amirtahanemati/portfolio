import { AnimatePresence, motion } from 'motion/react'
import { useLanguage } from '../i18n'

export function SectionIntro({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  const { lang } = useLanguage()

  return (
    <motion.div
      className="section-intro"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .3 }}
      transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-intro__number latin">{number}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={`${lang}-${eyebrow}`}
          className="section-intro__eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          {eyebrow}
        </motion.span>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.h2
          key={`${lang}-${title}`}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: .45, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>
      </AnimatePresence>
    </motion.div>
  )
}
