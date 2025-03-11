import { logos } from "@/utils/logos";

export const InfiniteCarousel = () => {
  return (
    <div className="flex gap-10 animate-infinite-scroll">
      {[...logos, ...logos].map((logo, index) => (
        <img
          key={`${logo.altText}${index}`}
          src={logo.logo}
          alt={logo.altText}
          className="h-20 w-auto max-md:h-11"
        />
      ))}
    </div>
  );
};
