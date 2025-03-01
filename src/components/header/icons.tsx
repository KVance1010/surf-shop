import Image from "next/image";
import Link from "next/link";
import { Menu, User2 } from "lucide-react";
import { CartTotal } from "./counter";

export const Icons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Menu size={32} className=" md:hidden" />
      <Link href="/cart">
        <div className="flex items-center space-x-4 relative">
          <CartTotal />
          <Image
            width="35"
            height="32"
            src="/shopping-cart.svg"
            unoptimized
            alt="shopping cart icon"
            className="cursor-pointer hover:text-accent hover:fill-accent hover:stroke-accent"
          />
        </div>
      </Link>
      <Link href="/profile" className="hover:text-accent">
        <User2 size={32} />
      </Link>
    </div>
  );
};
