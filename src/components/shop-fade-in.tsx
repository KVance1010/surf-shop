import { TargetAndTransition, motion } from "motion/react";

const animations: Record<string, TargetAndTransition> = {
  _313_1776_div: {
    opacity: [0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [0.42, 0, 1, 1],
        times: [0, 0.75],
        duration: 0.4
      }
    }
  },
  _313_1782_div: {
    opacity: [0, 0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0.42, 0, 1, 1]
        ],
        times: [0, 0.125, 0.875],
        duration: 0.4
      }
    }
  },
  _313_1788_div: {
    opacity: [0, 0, 1],
    transition: {
      opacity: {
        type: "keyframes",
        ease: [
          [0, 0, 1, 1],
          [0.42, 0, 1, 1]
        ],
        times: [0, 0.25, 1],
        duration: 0.4
      }
    }
  }
};

export function App() {
  return (
    <>
      <motion.div id="_313_1776_div" animate={animations._313_1776_div} />
      <motion.div id="_313_1782_div" animate={animations._313_1782_div} />
      <motion.div id="_313_1788_div" animate={animations._313_1788_div} />
    </>
  );
}
