import Image from "next/image";
import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export function CarouselComponent({
  title,
  products
}: {
  title: string;
  products: {
    id: string;
    name: string;
    mainImage: { url: string; alt: string };
  }[];
}) {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true
      }}
      >
        <div className="pt-10 pb-5 text-center font-title font-bold text-xl" >
      <CardTitle>{title}</CardTitle>
      </div>
      <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <div className="flex flex-col w-full items-center ">
                <Card>
                  <CardContent className="flex w-80 h-96 items-center justify-center relative p-6 rounded-lg overflow-hidden">
                    <Image
                      fill
                      className="object-contain w-full h-auto"
                      alt={product.mainImage.alt}
                      src={product.mainImage.url}
                    />
                  </CardContent>
                  <CardTitle className="text-center py-8 text-md font-medium">{product.name}</CardTitle>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
