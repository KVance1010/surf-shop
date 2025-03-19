import { SocialIcons } from "./social-icons";

export const SocialMedia = () => {
  return (
    <div
      className="flex flex-col max-md:w-auto max-md:min-w-[200px] max-sm:items-center max-sm:w-full"
      aria-label="Social media links"
    >
      <h4 className="mb-1.5 text-base font-medium text-subtitle text-accent">
        Follow Us
      </h4>
      <div className="flex gap-3 max-sm:justify-center">
        <SocialIcons />
      </div>
    </div>
  );
};
