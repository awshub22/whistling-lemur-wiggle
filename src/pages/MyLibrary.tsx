import { useOutletContext } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DramaCard } from "@/components/DramaCard";
import type { Drama } from "@/data/dramas";

interface LibraryContext {
  handleDramaClick: (drama: Drama) => void;
}

const MyLibrary = () => {
  const { handleDramaClick } = useOutletContext<LibraryContext>();
  const { watchlist, history, isLoggedIn } = useAppContext();

  if (!isLoggedIn) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">My Library</h1>
        <p className="mt-4 text-muted-foreground">
          Please log in to see your watchlist and history.
        </p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8">My Library</h1>
      <Tabs defaultValue="watchlist" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="watchlist">Watchlist ({watchlist.length})</TabsTrigger>
          <TabsTrigger value="history">History ({history.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="watchlist" className="mt-6">
          {watchlist.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {watchlist.map((drama) => (
                <DramaCard key={drama.id} drama={drama} onCardClick={handleDramaClick} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">Your watchlist is empty.</p>
              <p className="text-sm text-muted-foreground">Click the "+" icon on a drama to add it here.</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          {history.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {history.map((drama) => (
                <DramaCard key={drama.id} drama={drama} onCardClick={handleDramaClick} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">You haven't watched anything yet.</p>
              <p className="text-sm text-muted-foreground">Dramas you watch will appear here.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyLibrary;