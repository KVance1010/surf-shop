import React from "react";
import { VideoCard } from "../../ui-custom/video-card";

export const VideoGrid: React.FC = () => {
  return (
    <section>
      <h4 className="mb-9 text-xl font-medium text-subtitle text-primary">
        Trending Videos
      </h4>
      <div className="grid gap-9 mb-10 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:gap-6 max-sm:grid-cols-[1fr]">
        <VideoCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e5de99233652f6ce9c63b97f3e055d40104e3b8d"
          altText="Surfing barrel wave"
          title="Pro Tips: Mastering the Barrel"
        />
        <VideoCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c158a9cc3be7d3bfe35ae84615ff3f0023368188"
          altText="Beginner surfing"
          title="Beginner's Guide to Surfing"
        />
        <VideoCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/9504d4e8dbb37a1fdbb0fcdf81803c10d9c948b2"
          altText="Hidden surf spots"
          title="Best Surf Spots: Hidden Gems"
        />
      </div>
    </section>
  );
};
