import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="flex relative z-50 bg-primary text-primary-foreground items-center justify-between  px-20 py-5 max-md:px-8 max-md:py-4">
      <Link href="/" className="relative h-[67px] w-[317px] mr-20 max-sm:mr-10">
        <Image src="/brand.svg" alt="Surf Shop Logo" fill unoptimized />
      </Link>
      <div className="hidden lg:block">
        <Nav />
      </div>
      <Icons />
    </header>
  );
};
