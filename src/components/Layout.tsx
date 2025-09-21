import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { LoginPopup } from "@/components/LoginPopup";
import { useAppContext } from "@/context/AppContext";
import { MadeWithDyad } from "./made-with-dyad";
import type { Drama } from "@/data/dramas";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DramaDetailContent } from "@/components/DramaDetailContent";

export const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [selectedDrama, setSelectedDrama] = useState<Drama | null>(null);
  const { login } = useAppContext();

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
      />
      <main className="container mx-auto px-4 pb-8">
        <Outlet context={{ searchTerm, handleDramaClick }} />
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