import { TitleContainer } from "@/components/ui-custom/title-container";
import { CTAButton } from "./videos/cta-button";
import { VideoGrid } from "./videos/video-grid";
import Image from "next/image";

export const Videos = () => {
  return (
    <TitleContainer title="Videos">
      <div className="flex flex-col gap-9 mx-auto my-0 ">
        <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
          <Image
            src="/video-header.webp"
            alt="Video Hero"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <VideoGrid />
        <CTAButton>SEE ALL VIDEOS</CTAButton>
      </div>
    </TitleContainer>
  );
};
