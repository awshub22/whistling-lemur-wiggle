import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { DramaList } from "@/components/DramaList";
import { GenreFilter } from "@/components/GenreFilter";
import { genres, Drama } from "@/data/dramas";
import { DramaCard } from "@/components/DramaCard";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const INITIAL_DRAMA_COUNT = 10;
const DRAMAS_TO_LOAD = 5;

interface IndexContext {
  searchTerm: string;
  handleDramaClick: (drama: Drama) => void;
  dramas: Drama[];
  isLoading: boolean;
  error: Error | null;
}

const Index = () => {
  const { searchTerm, handleDramaClick, dramas, isLoading, error } = useOutletContext<IndexContext>();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_DRAMA_COUNT);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 pb-8">
        <Skeleton className="w-full aspect-video rounded-lg my-8" />
        <Skeleton className="h-8 w-64 mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="w-full aspect-[2/3] rounded-md" />)}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: Failed to load dramas. Please try again later.</div>;
  }

  const recommendedDramas = dramas.filter((d) => d.isRecommended);
  const bestSellerDramas = dramas.filter((d) => d.isBestSeller);

  const filteredDramas = dramas.filter((drama) => {
    const matchesGenre = selectedGenre === "All" || drama.genre === selectedGenre;
    // Search term filtering is now primarily for the main list, dropdown is for quick access
    const matchesSearch = drama.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + DRAMAS_TO_LOAD);
  };

  return (
    <>
      <Hero />
      <DramaList title="Rekomendasi Untuk Anda" dramas={recommendedDramas} onDramaClick={handleDramaClick} />
      <DramaList title="Drama Paling Laris" dramas={bestSellerDramas} onDramaClick={handleDramaClick} />
      
      <section className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <h2 className="text-2xl font-bold">Semua Drama</h2>
            <GenreFilter 
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreChange={setSelectedGenre}
            />
          </div>
          {filteredDramas.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredDramas.slice(0, visibleCount).map((drama) => (
                      <DramaCard key={drama.id} drama={drama} onCardClick={handleDramaClick} />
                  ))}
              </div>
              {visibleCount < filteredDramas.length && (
                <div className="text-center mt-8">
                  <Button variant="outline" onClick={handleLoadMore} className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Load More
                  </Button>
                </div>
              )}
            </>
          ) : (
              <div className="text-center py-10">
                  <p className="text-muted-foreground">No dramas found matching your criteria.</p>
              </div>
          )}
      </section>
    </>
  );
};

export default Index;