"use client";

import React from "react";

export const PlayButton: React.FC = () => {
  return (
    <button
      className="focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-full"
      aria-label="Play video"
    >
      <svg
        width="28"
        height="37"
        viewBox="0 0 28 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="play-icon"
      >
        <g clipPath="url(#clip0_313_1803)">
          <path
            d="M5.17527 5.00425L5.17527 5.00426L5.17876 5.00639L25.4248 17.379C25.4254 17.3793 25.426 17.3797 25.4266 17.38C25.9922 17.729 26.3281 18.3303 26.3281 18.9843C26.3281 19.6438 25.9878 20.247 25.4313 20.5856L25.4288 20.5872L5.18157 32.9605C5.18112 32.9607 5.18068 32.961 5.18024 32.9613C4.59811 33.3146 3.87019 33.3268 3.28658 32.9982C2.69566 32.6656 2.32812 32.0395 2.32812 31.3593V6.60928C2.32812 5.92906 2.69566 5.30296 3.28658 4.97032C3.87631 4.63835 4.6016 4.65152 5.17527 5.00425Z"
            fill="#E3F0FA"
            stroke="#0494CB"
            strokeWidth="3"
          />
        </g>
        <defs>
          <clipPath id="clip0_313_1803">
            <path
              d="M0.828125 0.984375H27.8281V36.9844H0.828125V0.984375Z"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
