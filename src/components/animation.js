export const PageTransition = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const FadeAnim = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      ease: "easeInOut",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

export const TitleAnim = {
  hidden: {
    opacity: 0,
    x: -200,
    transition: {
      ease: "easeInOut",
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .75,
      ease: "easeInOut",
    },
  },
};

export const ImageAnim = {
  hidden: {
    rotate: '-5deg',
    y: 20,
  },
  show: {
    rotate: '5deg',
    y: -20,
    transition: {
      yoyo: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

export const Fade = {
  hidden: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};