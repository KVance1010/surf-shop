import Image from "next/image";

export const NewsletterSubscription = () => {
  return (
    <div
      className="flex flex-col w-72 max-md:w-auto max-md:min-w-[200px] max-sm:items-center max-sm:w-full"
      aria-label="Newsletter subscription"
    >
      <h4 className="mb-2 text-base font-medium text-subtitle text-accent">
        Newsletter
      </h4>
      <form className="flex h-10 max-sm:w-full max-sm:max-w-72">
        <label className="sr-only" htmlFor="newsletter-email">
          Enter your email
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Enter your email"
          className="px-4 py-0 w-60 h-10 text-sm text-foreground-dark bg-background-dark rounded-l border-[none] max-sm:flex-1 focus:outline-none focus:ring-2 focus:ring-accent peer"
          required
        />
        <button
          type="submit"
          className="flex justify-center items-center w-12 h-10 bg-blue rounded-r cursor-pointer border-[none] text-[white] hover:bg-blue-700 focus:outline-none focus:ring-2 peer-focus:ring-2 peer-focus:ring-accent"
          aria-label="Subscribe to newsletter"
        >
          <Image
            src="/icons/send-arrow.svg"
            alt="Arrow right"
            width={20}
            height={20}
            unoptimized
          />
        </button>
      </form>
    </div>
  );
};
