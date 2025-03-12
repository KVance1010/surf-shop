"use client";

import React from "react";
import { PlayButton } from "./play-button";

interface VideoCardProps {
  imageUrl: string;
  altText: string;
  title: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  imageUrl,
  altText,
  title
}) => {
  return (
    <article className="flex flex-col gap-6">
      <div className="overflow-hidden relative w-full rounded-lg h-[252px] max-sm:h-[200px]">
        <img src={imageUrl} alt={altText} className="object-cover size-full" />
        <div className="flex absolute top-0 left-0 justify-center items-center bg-black bg-opacity-10 size-full transition-opacity hover:bg-opacity-20">
          <PlayButton />
        </div>
      </div>
      <h5 className="text-md font-medium text-primary text-sans max-sm:text-base">
        {title}
      </h5>
    </article>
  );
};
