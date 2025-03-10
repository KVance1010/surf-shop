import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative w-screen h-[calc(100vh-107px)] max-md:h-[calc(100vh-99px)] flex max-md:justify-center overflow-hidden p-20 max-md:px-8 max-md:py-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-2"></div>
      <div className="w-[calc(100%-160px)] max-md:w-[calc(100%-128px)] max-w-[745px] absolute z-1  flex flex-col  items-center bottom-1/4">
        <h1 className="font-title font-extrabold text-6xl max-md:text-[40px] max-sm:text-xl tracking-widest text-accent font-stroke-dark-1 w-auto text-center">
          THE SURF IS CALLING
        </h1>
        <h2 className="font-subtitle max-md:font-semibold text-xl tracking-wider max-md:text-md max-sm:text-base max-sm:my-4 font-stroke-dark-2 text-accent my-7 text-center w-auto">
          FIND YOUR PERFECT WAVE
        </h2>
        <Button className="px-3 bg-secondary text-primary text-center w-fit hover:bg-accent ">
          <Link
            className="px-3 text-center max-md:text-sm max-md:px-1 w-auto"
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
      <div className="absolute bottom-0 left-0 w-full flex justify-center align-center h-12">
        <Image
          src="/icons/down-arrow.svg"
          alt="down arrow"
          width={30}
          height={30}
          unoptimized
          className=" animate-bounce"
        />
      </div>
    </div>
  );
};
