export const ease = [0.22, 1, 0.36, 1] as const
// expo-out — entrada rápida com assentamento longo, sensação premium
export const easeExpo = [0.16, 1, 0.3, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease } },
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const viewport = { once: true, margin: "-100px" }
