import type { Drama } from "@/data/dramas";
import { ScrollArea } from "./ui/scroll-area";

interface SearchResultsDropdownProps {
  results: Drama[];
  onResultClick: (drama: Drama) => void;
  onClose: () => void;
}

export function SearchResultsDropdown({ results, onResultClick, onClose }: SearchResultsDropdownProps) {
  return (
    <div className="absolute top-full mt-2 w-full sm:w-80 bg-background/90 backdrop-blur-lg border border-white/10 rounded-md shadow-lg z-50">
      <ScrollArea className="max-h-96">
        {results.length > 0 ? (
          results.map((drama) => (
            <div
              key={drama.id}
              className="flex items-center p-2 hover:bg-white/10 cursor-pointer"
              onClick={() => {
                onResultClick(drama);
                onClose();
              }}
            >
              <img src={drama.imageUrl} alt={drama.title} className="w-12 h-16 object-cover rounded-md mr-3" />
              <div>
                <p className="font-semibold text-sm">{drama.title}</p>
                <p className="text-xs text-muted-foreground">{drama.year} - {drama.genre}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-sm text-muted-foreground">
            No results found.
          </div>
        )}
      </ScrollArea>
    </div>
  );
}