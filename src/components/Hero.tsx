import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { dramas } from "@/data/dramas";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

export function Hero() {
  const featuredDramas = dramas.slice(0, 4); // Take first 4 for hero
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="w-full py-8">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {featuredDramas.map((drama) => (
            <CarouselItem key={drama.id}>
              <div className="p-1">
                <Card className="border-none">
                  <CardContent className="relative flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <img
                      src={drama.imageUrl.replace('400x600', '1280x720')}
                      alt={drama.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                      <h2 className="text-2xl md:text-5xl font-bold">{drama.title}</h2>
                      <p className="mt-2 text-md md:text-lg">{drama.genre}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
      </Carousel>
    </section>
  );
}