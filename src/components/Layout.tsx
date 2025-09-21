import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { LoginPopup } from "@/components/LoginPopup";
import { useAppContext } from "@/context/AppContext";
import { MadeWithDyad } from "./made-with-dyad";
import type { Drama } from "@/data/dramas";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DramaDetailContent } from "@/components/DramaDetailContent";
import { getDramas } from "@/lib/api";

export const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [selectedDrama, setSelectedDrama] = useState<Drama | null>(null);
  const [searchResults, setSearchResults] = useState<Drama[]>([]);
  const { login } = useAppContext();

  const { data: dramas = [], isLoading, error } = useQuery<Drama[]>({
    queryKey: ["dramas"],
    queryFn: getDramas,
  });

  useEffect(() => {
    if (searchTerm) {
      const results = dramas.filter(drama => 
        drama.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, dramas]);

  const handleDramaClick = (drama: Drama) => {
    setSelectedDrama(drama);
  };

  const handleLoginSuccess = (email: string) => {
    login(email);
    setIsLoginPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-black text-foreground">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onLoginClick={() => setIsLoginPopupOpen(true)}
        searchResults={searchResults}
        onResultClick={handleDramaClick}
      />
      <main className="container mx-auto px-4 pb-8">
        <Outlet context={{ searchTerm, handleDramaClick, dramas, isLoading, error }} />
      </main>
      <MadeWithDyad />
      <LoginPopup
        open={isLoginPopupOpen}
        onOpenChange={setIsLoginPopupOpen}
        onLoginSuccess={handleLoginSuccess}
      />
      <Dialog
        open={!!selectedDrama}
        onOpenChange={(isOpen) => !isOpen && setSelectedDrama(null)}
      >
        <DialogContent className="max-w-4xl w-full p-0 border-none bg-black overflow-hidden">
          {selectedDrama && <DramaDetailContent drama={selectedDrama} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};