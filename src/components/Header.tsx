import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dramas", label: "Daftar Drama" },
  { href: "/genres", label: "Genre" },
];

export function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <NavLink to="/" className="text-xl md:text-2xl font-bold text-red-600">
            DRAMAWOK
          </NavLink>
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 w-40 md:w-64"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <ThemeToggle />
          <Button className="hidden md:inline-flex bg-gradient-to-r from-red-600 to-red-800 text-white hover:opacity-90 transition-opacity">
            Login
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <NavLink to="/" className="text-xl font-bold text-red-600 mb-4">
                  DRAMAWOK
                </NavLink>
                <div className="relative w-full mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                </div>
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      className={({ isActive }) =>
                        `text-lg font-medium transition-colors hover:text-primary ${
                          isActive ? "text-primary" : "text-foreground"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
                <Button className="mt-4 bg-gradient-to-r from-red-600 to-red-800 text-white hover:opacity-90 transition-opacity">
                  Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}