import { CategoryCard } from "@/components/ui-custom/category-card";
import { TitleContainer } from "@/components/ui-custom/title-container";
import { categories } from "@/utils/fake-items";
import { InfiniteCarousel } from "../ui-custom/infinite-carousel";

export const Shop = () => {
  return (
    <TitleContainer title="Shop">
      <div className="flex my-8 justify-between max-lg:justify-center w-full flex-wrap gap-9">
        {categories &&
          categories.map((categoryItem) => (
            <CategoryCard key={categoryItem.id} category={categoryItem} />
          ))}
      </div>
      <div className="w-full mt-16  overflow-hidden ">
        <InfiniteCarousel />
      </div>
    </TitleContainer>
  );
};
