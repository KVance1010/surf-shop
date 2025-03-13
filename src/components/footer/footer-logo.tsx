import Image from "next/image";

export const FooterLogo = () => {
  return (
    <div
      className="flex flex-col gap-4 w-[304px] max-md:items-center max-md:w-full"
      aria-label="Company Logo and Description"
    >
      <Image
        src="/brand.svg"
        alt="Surf Shop Logo"
        width={304}
        height={78}
        unoptimized
      />
      <p className="text-sm tracking-wider text-center text-secondary">
        Your ultimate surfing destination for gear, community, and adventures.
      </p>
    </div>
  );
};
