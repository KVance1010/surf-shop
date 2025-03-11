
import Image from "next/image";
import { CategoryCardProps } from "@/types/categories";

export const CategoryCard = ({ category }: { category: CategoryCardProps }) => {
  return (
    <a href={category.link} className="w-1/4 max-lg:w-1/2 min-w-[313px] max-small:w-full">
      <div className="relative w-full h-96 rounded-lg overflow-hidden">
        <Image
          src={category.image}
          className="object-cover w-full h-auto "
          fill

          alt={category.altText}
          // sizes={}
        />
      </div>
      <h4 className="mt-5 font-subtitle font-medium text-md">
        {category.name}
      </h4>
    </a>
  );
};

