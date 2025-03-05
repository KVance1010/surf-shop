import Image from "next/image";
import Link from "next/link";
import { CartTotal } from "./counter";
import { HamburgerMenu } from "./hamburger";

export const Icons = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="block lg:hidden">
        <HamburgerMenu />
      </div>
      <Link href="/cart">
        <div className="flex items-center min-w-8 relative">
          <CartTotal />
          <Image
            width="35"
            height="32"
            src="/nav/shopping-cart.svg"
            unoptimized
            alt="shopping cart icon"
            className="cursor-pointer hover:text-accent hover:fill-accent hover:stroke-accent"
          />
        </div>
      </Link>
      <Link href="/profile" className="hover:text-accent min-w-7 max-sm:hidden">
        <Image
          width="25"
          height="25"
          src="/nav/account-icon.svg"
          unoptimized
          alt="user icon"
        />
      </Link>
    </div>
  );
};
