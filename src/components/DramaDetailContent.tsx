import type { Drama } from "@/data/dramas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star, Play, Plus, Share2 } from "lucide-react";

interface DramaDetailContentProps {
  drama: Drama;
}

export function DramaDetailContent({ drama }: DramaDetailContentProps) {
  return (
    <div className="relative text-white">
      <div className="absolute top-0 left-0 w-full h-2/3">
        <img
          src={drama.imageUrl.replace('400x600', '1280x720')}
          alt={drama.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      <ScrollArea className="relative h-[80vh] w-full">
        <div className="relative z-10 p-6 md:p-8 pt-48 md:pt-56">
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl font-bold">{drama.title}</h1>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{drama.rating}/5</span>
              </div>
              <span>{drama.year}</span>
              <span>{drama.episodes} Episodes</span>
              <span>{drama.duration} min</span>
              <Badge variant={drama.status === 'Completed' ? 'default' : 'secondary'} className="bg-green-600 text-white">
                {drama.status}
              </Badge>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <Button className="w-full md:w-auto bg-white text-black hover:bg-gray-200">
              <Play className="mr-2 h-4 w-4" /> Mulai Menonton
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hover:bg-white/10">
                <Plus className="mr-2 h-4 w-4" /> Watchlist
              </Button>
              <Button variant="ghost" className="hover:bg-white/10">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-2">Sinopsis</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{drama.synopsis}</p>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Genre</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-500">{drama.genre}</Badge>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-1">Cast</h3>
                  <p className="text-gray-400">{drama.cast.join(", ")}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Director</h3>
                  <p className="text-gray-400">{drama.director}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Episode:</h2>
              <ScrollArea className="h-48 pr-4">
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: drama.episodes }, (_, i) => i + 1).map((ep) => (
                    <Button key={ep} variant="outline" className="bg-white/10 border-gray-600 hover:bg-white/20">
                      {ep}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}