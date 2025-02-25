import Image from "next/image";
import { Nav } from "./nav";
import { Icons } from "./icons";

export const header = () => {
  return (
    <div>
      <div className="relative w-full h-65">
        <Image src="/logo.png" alt="Surf Shop Logo" fill unoptimized />
      </div>
      <Nav />
      <Icons />
    </div>
  );
};
