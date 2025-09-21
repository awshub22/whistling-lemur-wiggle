import { useState } from "react";
import { Header } from "@/components/Header";
import { DramaList } from "@/components/DramaList";
import { GenreFilter } from "@/components/GenreFilter";
import { dramas, genres, Drama } from "@/data/dramas";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { DramaCard } from "@/components/DramaCard";
import { Hero } from "@/components/Hero";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DramaDetailContent } from "@/components/DramaDetailContent";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedDrama, setSelectedDrama] = useState<Drama | null>(null);

  const recommendedDramas = dramas.filter((d) => d.isRecommended);
  const bestSellerDramas = dramas.filter((d) => d.isBestSeller);

  const filteredDramas = dramas.filter((drama) => {
    const matchesGenre = selectedGenre === "All" || drama.genre === selectedGenre;
    const matchesSearch = drama.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const handleDramaClick = (drama: Drama) => {
    setSelectedDrama(drama);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-black text-foreground">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="container mx-auto px-4 pb-8">
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredDramas.map((drama) => (
                        <DramaCard key={drama.id} drama={drama} onCardClick={handleDramaClick} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-muted-foreground">No dramas found matching your criteria.</p>
                </div>
            )}
        </section>
      </main>
      <MadeWithDyad />

      <Dialog open={!!selectedDrama} onOpenChange={(isOpen) => !isOpen && setSelectedDrama(null)}>
        <DialogContent className="max-w-4xl w-full p-0 border-none bg-black overflow-hidden">
          {selectedDrama && <DramaDetailContent drama={selectedDrama} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;