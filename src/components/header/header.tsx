import Image from "next/image";
import { Icons } from "./icons";
import { Nav } from "./nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex bg-primary text-primary-foreground items-center justify-between px-20 py-5">
      <Link href="/" className="relative h-[67px] w-[317px]">
        <Image src="/brand.svg" alt="Surf Shop Logo" fill unoptimized />
      </Link>
      <Nav />
      <Icons />
    </header>
  );
};
