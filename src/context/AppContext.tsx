import { createContext, useContext, useState, ReactNode } from 'react';
import type { Drama } from '@/data/dramas';
import { useToast } from "@/components/ui/use-toast";

interface AppContextType {
  isLoggedIn: boolean;
  login: (email: string) => void;
  logout: () => void;
  watchlist: Drama[];
  history: Drama[];
  toggleWatchlist: (drama: Drama) => void;
  addToHistory: (drama: Drama) => void;
  isInWatchlist: (dramaId: number) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [watchlist, setWatchlist] = useState<Drama[]>([]);
  const [history, setHistory] = useState<Drama[]>([]);
  const { toast } = useToast();

  const login = (email: string) => {
    setIsLoggedIn(true);
    toast({
      title: "Login Successful",
      description: `Welcome back, ${email}!`,
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const isInWatchlist = (dramaId: number) => {
    return watchlist.some(d => d.id === dramaId);
  };

  const toggleWatchlist = (drama: Drama) => {
    setWatchlist(prev => {
      const exists = prev.some(d => d.id === drama.id);
      if (exists) {
        toast({ title: `"${drama.title}" removed from your watchlist.` });
        return prev.filter(d => d.id !== drama.id);
      } else {
        toast({ title: `"${drama.title}" added to your watchlist.` });
        return [drama, ...prev];
      }
    });
  };

  const addToHistory = (drama: Drama) => {
    setHistory(prev => {
      const filtered = prev.filter(d => d.id !== drama.id);
      return [drama, ...filtered];
    });
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, login, logout, watchlist, history, toggleWatchlist, addToHistory, isInWatchlist }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};