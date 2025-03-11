import { CategoryCard } from "@/components/ui/category-card";
import { TitleContainer } from "@/components/ui/title-container";
import { InfiniteCarousel } from "../ui/infinite-carousel";
import { categories } from "@/utils/fake-items";

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
