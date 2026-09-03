import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

export function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 900, damping: 55, mass: .12 })
  const sy = useSpring(y, { stiffness: 900, damping: 55, mass: .12 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY) }
    const over = (event: MouseEvent) => {
      const el = event.target as HTMLElement
      setActive(Boolean(el.closest('a, button, [data-cursor="active"]')))
    }
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
    }
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className={`cursor ${active ? 'cursor--active' : ''}`}
      style={{ x: sx, y: sy }}
    />
  )
}
