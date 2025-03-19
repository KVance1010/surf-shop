import { Apparel } from "./apparel";
import { Community } from "./community";
import { Hero } from "./hero";
import { Shop } from "./shop";
import { Videos } from "./videos";

export const HomePageContent = () => {
  return (
    <div className="relative">
      <Hero />
      <Shop />
      <Apparel />
      <Videos />
      <Community />
    </div>
  );
};
