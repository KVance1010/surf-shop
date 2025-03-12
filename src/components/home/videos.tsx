import { CTAButton } from "./videos/cta-button";
import { VideoGrid } from "./videos/video-grid";
import { VideoHero } from "./videos/video-hero";

export const Videos = () => {
  return (
    <section className="px-28 py-0 w-full bg-white max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <div className="flex flex-col gap-9 mx-auto my-0 max-w-[1235px]">
        <VideoHero />
        <VideoGrid />
        <CTAButton>SEE ALL VIDEOS</CTAButton>
      </div>
    </section>
  );
};
