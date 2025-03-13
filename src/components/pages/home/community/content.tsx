import Link from "next/link";

export function ContentSection() {
  return (
    <div className="flex flex-col h-full justify-center items-center px-16 py-16 w-[70%] max-xl:relative max-xl:p-5 max-xl:w-full ">
      <h3 className="mb-8 text-5xl tracking-widest italic font-bold text-center text-accent max-xl:mb-8 max-xl:text-xl font-title">
        NEVER SURF ALONE!
      </h3>
      <p className="mb-10 text-base font-normal tracking-wider leading-relaxed text-center text-secondary max-md:text-sm font-sans">
        Connect with experienced surfers in your area to learn new techniques,
        get feedback on your form, and discover the best breaks for your skill
        level. Share your knowledge and passion with others, and improve your
        surfing together. Our geofencing helps you find surfers nearby who can
        help you grow.
      </p>
      <Link
        href="/map"
        className="px-8 py-4 text-base font-medium shadow-contrast hover:shadow-none bg-secondary rounded-lg cursor-pointer border-[none] text-primary max-md:px-5 max-md:py-3 max-md:w-full max-md:text-center hover:bg-contrast hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary transition-colors shadow-[7px_7px_10px_rgba(10,33,85,0.4)] "
        aria-label="Find Your Surfing Crew"
      >
        Find Your Crew
      </Link>
    </div>
  );
}
