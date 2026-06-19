import { type Transition, type Variants } from "framer-motion";

// Variants reusable
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1 },
};

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// Transition presets — lambat & halus (smooth easing cubic-bezier)
export const smooth: Transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };
export const smoothSlow: Transition = { duration: 1.3, ease: [0.22, 1, 0.36, 1] };
export const smoothDelay: Transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 };
export const smoothDelay2: Transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 };

// Viewport preset untuk whileInView
export const viewportOnce = { once: true, amount: 0.3 } as const;
