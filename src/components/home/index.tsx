import { Hero } from "./hero";
import { Shop } from "./shop";
import { Apparel } from "./apparel";

export const HomePageContent = () => {
  return (
    <div className="relative">
      <Hero />
      <Shop />
      <Apparel />
    </div>
  );
};
