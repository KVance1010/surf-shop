import { SocialIcons } from "./social-icons";

export const SocialMedia= () => {
  return (
    <div
      className="flex flex-col max-md:w-auto max-md:min-w-[200px] max-sm:items-center max-sm:w-full"
      aria-label="Social media links"
    >
      <h2 className="mb-5 text-xl font-medium text-orange-300">Follow Us</h2>
      <div className="flex gap-4 max-sm:justify-center">
        <SocialIcons />
      </div>
    </div>
  );
};
