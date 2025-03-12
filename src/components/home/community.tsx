import { ContentSection } from "./community/content";
import { ImageSection } from "./community/image-overlay";

export function Community() {
  return (
    <section className="p-20 max-md:px-8 max-md:py-4">
      <div className="relative flex mx-auto my-20 rounded-3xl bg-primary h-[500px]  w-full overflow-visible max-xl:flex-col max-xl:py-10 max-xl:my-10 max-xl:h-auto max-md:py-5 max-md:my-5">
        <ContentSection />
        <ImageSection />
      </div>
    </section>
  );
}
