import { CarouselComponent } from "@/components/ui-custom/carousel";
import { favProducts } from "@/utils/fake-items";

export const Apparel = () => {
  return (
    <div className="flex justify-between p-20 h-full w-screen max-md:p-8 bg-fixed bg-parallax-pipe bg-cover">
      <div className="h-[600px] w-2/5 bg-background rounded-lg">
        <CarouselComponent title="Women's Apparel" products={favProducts.womens}/>
      </div>
      <div className="h-[600px] w-2/5 bg-background rounded-lg">
        <CarouselComponent title="Men's Apparel" products={favProducts.mens}/>
      </div>
    </div>
  );
};
