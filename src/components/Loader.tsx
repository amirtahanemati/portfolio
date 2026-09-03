import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { toPersianDigits, useLanguage } from '../i18n'

export function Loader() {
  const [visible, setVisible] = useState(true)
  const [count, setCount] = useState(0)
  const reduce = useReducedMotion()
  const { lang, t } = useLanguage()

  useEffect(() => {
    if (reduce) {
      setVisible(false)
      return
    }
    let raf = 0
    const start = performance.now()
    const duration = 260
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setVisible(false), 40)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduce])

  const displayCount = String(count).padStart(3, '0')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: .3, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="loader__brand latin">AMIRTAHA®</div>
          <div className="loader__meta">{t.loader.meta}</div>
          <div className="loader__count">{lang === 'fa' ? toPersianDigits(displayCount) : displayCount}</div>
          <div className="loader__rail"><span style={{ width: `${count}%` }} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
