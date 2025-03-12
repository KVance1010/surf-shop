export const QuickLinks = () => {
  return (
    <nav
      className="flex flex-col gap-2.5 max-md:w-auto max-md:min-w-[200px] max-sm:items-center max-sm:w-full"
      aria-label="Quick links"
    >
      <h4 className="mb-5 text-md font-medium text-accent">Quick Links</h4>
      <ul className="flex flex-col gap-2.5 max-sm:items-center">
        <li>
          <a
            href="/about"
            className="text-base text-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-base text-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/shipping"
            className="text-base text-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            Shipping
          </a>
        </li>
      </ul>
    </nav>
  );
};
