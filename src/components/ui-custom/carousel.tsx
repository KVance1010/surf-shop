import Image from "next/image";
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
      className="w-full px-4"
      opts={{
        align: "start",
        loop: true
      }}
    >
      <div className="pt-12 pb-6 text-center font-title font-bold text-2xl">
        <CardTitle>{title}</CardTitle>
      </div>
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <div className="flex flex-col w-full items-center">
              <Card className="w-full max-w-[480px] max-md:max-w-[320px]">
                <CardContent className="p-8 max-md:p-6">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                      alt={product.mainImage.alt}
                      src={product.mainImage.url}
                    />
                  </div>
                </CardContent>
                <CardTitle className="text-center py-10 text-lg font-medium max-md:py-8 max-md:text-md">
                  {product.name}
                </CardTitle>
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
