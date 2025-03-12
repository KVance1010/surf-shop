import React from "react";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-24 py-8 mx-auto my-0 text-2xl font-extrabold text-center text-white bg-sky-600 rounded-2xl shadow-sm cursor-pointer w-fit hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors max-md:px-16 max-md:py-6 max-md:text-xl max-sm:px-12 max-sm:py-5 max-sm:w-full max-sm:text-lg"
    >
      {children}
    </button>
  );
};
