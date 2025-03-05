import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative w-dvw h-[calc(100dvh - 107px)] overflow-hidden">
      <div className="fixed p-20 top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-2"></div>
        <div className="w-[745px] z-1 absolute flex flex-col justify-center items-center bottom-1/4">
          <h1 className="font-title font-bold text-6xl tracking-widest text-accent font-stroke-dark-1 w-auto text-center">
            THE SURF IS CALLING
          </h1>
          <h2 className="font-subtitle font-medium text-xl tracking-wider font-stroke-dark-2 text-accent my-7 text-center w-auto">
            FIND YOUR PERFECT WAVE
          </h2>
          <Button className="px-3 bg-secondary text-primary text-center w-fit hover:bg-accent ">
            <Link
              className="px-3 text-center w-auto"
              href="/profile"
            >
              DIVE IN!
            </Link>
          </Button>
        </div>
        <video
          loop
          autoPlay
          muted
          className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        >
          <source src="/hero-pipe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
