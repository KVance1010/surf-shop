import { CarouselComponent } from "@/components/ui-custom/carousel";
import { favProducts } from "@/utils/fake-items";

export const Apparel = () => {
  return (
    <div className="flex flex-row justify-between p-20 w-full bg-fixed bg-parallax-pipe bg-cover gap-8 overflow-x-hidden max-lg:flex-col max-lg:items-center max-md:p-8 ">
      <div className="w-[45%] bg-background rounded-lg overflow-hidden max-lg:w-full">
        <CarouselComponent
          title="Women's Apparel"
          products={favProducts.womens}
        />
      </div>
      <div className="w-[45%] bg-background rounded-lg overflow-hidden max-lg:w-full">
        <CarouselComponent title="Men's Apparel" products={favProducts.mens} />
      </div>
    </div>
  );
};
