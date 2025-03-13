import Link from "next/link";

export const QuickLinks = () => {
  return (
    <nav
      className="flex flex-col gap-2 max-md:w-auto max-md:min-w-[200px] max-sm:items-center max-sm:w-full"
      aria-label="Quick links"
    >
      <h4 className=" text-base font-medium text-subtitle text-accent">Quick Links</h4>
      <ul className="flex flex-col gap-1.5 max-sm:items-center">
        <li>
          <Link
            href="/about"
            className="text-sm text-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-sm text-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/shipping"
            className="text-sm text-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            Shipping
          </Link>
        </li>
      </ul>
    </nav>
  );
};
