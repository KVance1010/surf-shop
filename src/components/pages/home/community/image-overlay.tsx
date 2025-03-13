import Image from "next/image";

export function ImageSection() {
  return (
    <div className="relative top-[-15%] h-[135%] w-1/2 max-sm:px-5  max-xl:right-0 max-xl:w-full max-xl:mt-6 max-xl:h-[500px] max-md:h-[300px] max-xl:justify-center">
      <Image
        src="/cellphone.webp"
        className="object-contain h-[200%] w-auto max-xl:w-auto max-xl:h-auto "
        alt="Mobile app interface showing map with surfer locations"
        fill
      />
    </div>
  );
}
