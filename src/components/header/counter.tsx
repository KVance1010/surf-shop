"use client";

import { useState } from "react";

export const CartTotal = () => {
  const [count, setCount] = useState(10);
  // const increment = () => {
  //   setCount((prev) => prev + 1);
  // };
  // const decrement = () => {
  //   setCount((prev) => prev - 1);
  // };
  // const emptyCart = () => {
  //   setCount(0);
  // };
  return (
    <>
      {count < 10 ? (
        <span className="absolute -top-2.5 text-accent start-3 max-sm:start-3.5 max-sm:-top-1.5 font-extrabold text-md max-sm:text-sm">
          {count}
        </span>
      ) : (
        <span className="absolute -top-1.5 text-accent start-2.5 max-sm:start-2 font-extrabold text-sm">
          {count}
        </span>
      )}
    </>
  );
};
