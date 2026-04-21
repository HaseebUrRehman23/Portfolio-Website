export const viewport = { once: false, amount: 0.25 };

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

export const fadeIn = (direction = "up", delay = 0) => {
  const distance = 36;
  const axis = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    hidden: {
      opacity: 0,
      ...axis[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
        delay,
      },
    },
  };
};

export const zoomIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      delay,
    },
  },
});
