import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Drama } from "@/data/dramas";

interface DramaCardProps {
  drama: Drama;
}

export function DramaCard({ drama }: DramaCardProps) {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
      <CardHeader className="p-0">
        <AspectRatio ratio={2 / 3}>
          <img
            src={drama.imageUrl}
            alt={drama.title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-base font-semibold truncate">
          {drama.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{drama.genre}</p>
      </CardContent>
    </Card>
  );
}