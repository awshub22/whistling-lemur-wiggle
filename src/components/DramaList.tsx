import type { Drama } from "@/data/dramas";
import { DramaCard } from "./DramaCard";

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {dramas.map((drama) => (
          <DramaCard key={drama.id} drama={drama} />
        ))}
      </div>
    </section>
  );
}