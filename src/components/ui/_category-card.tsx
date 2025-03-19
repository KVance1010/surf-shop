"use client";

import Image from "next/image";
import { TargetAndTransition, motion } from "motion/react";
import { CategoryCardProps } from "@/types/categories";

export const CategoryCard = ({ category }: { category: CategoryCardProps }) => {
  return (
    <a
      href={category.link}
      className="w-1/4 max-lg:w-1/2 min-w-[313px] max-small:w-full"
    >
      <div className="relative w-full h-96">
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

// export const CategoryCard = ({
//   categories
// }: {
//   categories: CategoryCardProps[];
// }) => {
//   const animations: Record<string, TargetAndTransition> = {
//     item0: {
//       opacity: [0, 1],
//       transition: {
//         opacity: {
//           type: "keyframes",
//           ease: [0.42, 0, 1, 1],
//           times: [0, 0.75],
//           duration: 0.4
//         }
//       }
//     },
//     item1: {
//       opacity: [0, 0, 1],
//       transition: {
//         opacity: {
//           type: "keyframes",
//           ease: [
//             [0, 0, 1, 1],
//             [0.42, 0, 1, 1]
//           ],
//           times: [0, 0.125, 0.875],
//           duration: 0.4
//         }
//       }
//     },
//     item2: {
//       opacity: [0, 0, 1],
//       transition: {
//         opacity: {
//           type: "keyframes",
//           ease: [
//             [0, 0, 1, 1],
//             [0.42, 0, 1, 1]
//           ],
//           times: [0, 0.25, 1],
//           duration: 0.4
//         }
//       }
//     }
//   };
//   return (
//     <>
//       {categories &&
//         categories.map((category, index) => (
//           <motion.div
//             key={category.id}
//             id={`item${index}`}
//             animate={animations[`item${index}`]}
//             className="w-1/4 max-lg:w-1/2 min-w-[313px] max-small:w-full"
//           >
//             <a
//               key={category.id}
//               href={category.link}
//               className="w-1/4 max-lg:w-1/2 min-w-[313px] max-small:w-full"
//             >
//               <div className="relative w-full h-96">
//                 <Image
//                   src={category.image}
//                   className="object-cover w-full h-auto "
//                   fill
//                   alt={category.altText}
//                   // sizes={}
//                 />
//               </div>
//               <h4 className="mt-5 font-subtitle font-medium text-md">
//                 {category.name}
//               </h4>
//             </a>
//           </motion.div>
//         ))}
//     </>
//   );
// };
