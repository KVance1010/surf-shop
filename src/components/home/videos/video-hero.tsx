import React from "react";

export const VideoHero: React.FC = () => {
  return (
    <div className="relative mb-10">
      <h1 className="mx-0 mt-20 mb-10 text-4xl font-semibold text-blue-950 max-sm:mx-0 max-sm:mt-10 max-sm:mb-8 max-sm:text-3xl">
        VIDEOS
      </h1>
      <div
        className="w-full bg-cover rounded-lg bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/5e6264cd5fb9e6c624da95f6c8b1aab9b95238eb')] h-[294px]"
        role="img"
        aria-label="Video section hero banner"
      />
    </div>
  );
};
