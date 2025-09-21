import { useState } from "react";
import { Header } from "@/components/Header";
import { DramaList } from "@/components/DramaList";
import { GenreFilter } from "@/components/GenreFilter";
import { dramas, genres } from "@/data/dramas";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { DramaCard } from "@/components/DramaCard";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const recommendedDramas = dramas.filter((d) => d.isRecommended);
  const bestSellerDramas = dramas.filter((d) => d.isBestSeller);

  const filteredDramas = dramas.filter((drama) => {
    const matchesGenre = selectedGenre === "All" || drama.genre === selectedGenre;
    const matchesSearch = drama.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="container mx-auto px-4">
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold">Premium Drama Videos</h1>
          <p className="text-muted-foreground mt-2">Watch your favorite dramas without any ads.</p>
        </div>

        <DramaList title="Rekomendasi Untuk Anda" dramas={recommendedDramas} />
        <DramaList title="Drama Paling Laris" dramas={bestSellerDramas} />
        
        <section className="py-6">
            <h2 className="text-2xl font-bold mb-4">Semua Drama</h2>
            <GenreFilter 
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreChange={setSelectedGenre}
            />
            {filteredDramas.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredDramas.map((drama) => (
                        <DramaCard key={drama.id} drama={drama} />
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
    </div>
  );
};

export default Index;