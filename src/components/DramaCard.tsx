import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Drama } from "@/data/dramas";
import { PlayCircle } from "lucide-react";

interface DramaCardProps {
  drama: Drama;
  onCardClick: (drama: Drama) => void;
}

export function DramaCard({ drama, onCardClick }: DramaCardProps) {
  return (
    <div onClick={() => onCardClick(drama)}>
      <Card className="overflow-hidden border-none group cursor-pointer">
        <CardContent className="p-0">
          <AspectRatio ratio={2 / 3} className="bg-muted rounded-md overflow-hidden">
            <img
              src={drama.imageUrl}
              alt={drama.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayCircle className="w-12 h-12 text-white" />
            </div>
          </AspectRatio>
          <div className="pt-2">
            <h3 className="text-sm font-semibold truncate group-hover:text-red-500 transition-colors">
              {drama.title}
            </h3>
            <p className="text-xs text-muted-foreground">{drama.genre}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}