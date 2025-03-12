export const QuickLinks = () => {
  return (
    <nav
      className="flex flex-col gap-2.5 max-md:w-auto max-md:min-w-[200px] max-sm:items-center max-sm:w-full"
      aria-label="Quick links"
    >
      <h2 className="mb-5 text-xl font-medium text-orange-300">Quick Links</h2>
      <ul className="flex flex-col gap-2.5 max-sm:items-center">
        <li>
          <a
            href="/about"
            className="text-xl text-sky-100 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-xl text-sky-100 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/shipping"
            className="text-xl text-sky-100 hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded"
          >
            Shipping
          </a>
        </li>
      </ul>
    </nav>
  );
};
