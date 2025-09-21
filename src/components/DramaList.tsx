import type { Drama } from "@/data/dramas";
import { DramaCard } from "./DramaCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DramaListProps {
  title: string;
  dramas: Drama[];
}

export function DramaList({ title, dramas }: DramaListProps) {
  if (dramas.length === 0) {
    return null;
  }

  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 'auto',
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {dramas.map((drama) => (
            <CarouselItem key={drama.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4">
              <DramaCard drama={drama} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}