import { Hero } from "./hero";
import { Shop } from "./shop";

export const HomePageContent = () => {
  return (
    <div className="relative">
      <Hero />
      <Shop />
    </div>
  );
};
