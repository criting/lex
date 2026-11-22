export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

export const springSnappy = {
  type: "spring" as const,
  stiffness: 420,
  damping: 30,
  mass: 0.75,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 180,
  damping: 24,
  mass: 0.95,
};

export const springReveal = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
  mass: 1.05,
};

export const springCinematic = {
  type: "spring" as const,
  stiffness: 90,
  damping: 18,
  mass: 1.1,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export function staggerChildren(stagger = 0.08, delayChildren = 0.05) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}
