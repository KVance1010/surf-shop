import { Hero } from "./hero";
import { Shop } from "./shop";
import { Apparel } from "./apparel";
import { Videos } from "./videos";
import { Community } from "./community";

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
