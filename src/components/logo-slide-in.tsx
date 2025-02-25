import { TargetAndTransition, motion } from "motion/react";

const animations: Record<string, TargetAndTransition> = {
  logo: {
    x: [null, 50],
    transition: {
      x: {
        type: "keyframes",
        ease: [0.42, 0, 1, 1],
        times: [0, 0.5],
        duration: 0.8
      },
      opacity: {
        type: "keyframes",
        ease: [0.42, 0, 1, 1],
        times: [0, 0.5],
        duration: 0.8
      }
    },
    opacity: [0, 1]
  },
  surf_shop: {
    opacity: [0, 0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0, 0, 0.58, 1]
        ],
        times: [0, 0.5, 0.875],
        duration: 0.8
      }
    }
  },
  slogan: {
    opacity: [0, 0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0.42, 0, 1, 1]
        ],
        times: [0, 0.625, 1],
        duration: 0.8
      }
    }
  }
};

export function App() {
  return (
    <>
      <motion.div id="logo" animate={animations.logo} />
      <motion.div id="surf_shop" animate={animations.surf_shop} />
      <motion.div id="slogan" animate={animations.slogan} />
    </>
  );
}
