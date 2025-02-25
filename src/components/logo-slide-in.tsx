import React from 'react';
import { motion, TargetAndTransition } from 'framer-motion';

const animations: Record<string, TargetAndTransition> = {
  "_335_165_from_board_to_beach_weve_got_you_covered": {
    "opacity": [
      0,
      0,
      1
    ],
    "transition": {
      "opacity": {
        "type": "keyframes",
        "ease": [
          [
            0,
            0,
            1,
            1
          ],
          [
            0.42,
            0,
            1,
            1
          ]
        ],
        "times": [
          0,
          0.625,
          1
        ],
        "duration": 0.8
      }
    }
  },
  "_335_172_surf_shop": {
    "opacity": [
      0,
      0,
      1
    ],
    "transition": {
      "opacity": {
        "type": "keyframes",
        "ease": [
          [
            0,
            0,
            1,
            1
          ],
          [
            0,
            0,
            0.58,
            1
          ]
        ],
        "times": [
          0,
          0.5,
          0.875
        ],
        "duration": 0.8
      }
    }
  },
  "_324_617_logo_logo": {
    "x": [
      null,
      50
    ],
    "transition": {
      "x": {
        "type": "keyframes",
        "ease": [
          0.42,
          0,
          1,
          1
        ],
        "times": [
          0,
          0.5
        ],
        "duration": 0.8
      },
      "opacity": {
        "type": "keyframes",
        "ease": [
          0.42,
          0,
          1,
          1
        ],
        "times": [
          0,
          0.5
        ],
        "duration": 0.8
      }
    },
    "opacity": [
      0,
      1
    ]
  }
}

export function App() {
  return (
    <>
      <motion.div id="_335_165_from_board_to_beach_weve_got_you_covered" animate={animations._335_165_from_board_to_beach_weve_got_you_covered} />
<motion.div id="_335_172_surf_shop" animate={animations._335_172_surf_shop} />
<motion.div id="_324_617_logo_logo" animate={animations._324_617_logo_logo} />
    </>
  )
}
