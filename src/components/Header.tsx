import { Search, Menu, User, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

export function Header({ searchTerm, onSearchChange, isLoggedIn, onLoginClick, onLogoutClick }: HeaderProps) {
  const baseNavLinks = [
    { href: "/", label: "Home" },
    { href: "/dramas", label: "Daftar Drama" },
    { href: "/genres", label: "Genre" },
  ];

  const navLinks = isLoggedIn
    ? [...baseNavLinks, { href: "/my-library", label: "My Library" }]
    : baseNavLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              DRAMAWOK
            </span>
          </NavLink>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 hover:text-red-500 pb-1 ${
                    isActive 
                      ? "text-red-500 border-b-2 border-red-500" 
                      : "text-muted-foreground border-b-2 border-transparent"
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
              className="pl-10 w-40 md:w-64 bg-background/50 border-white/20 focus:ring-red-500"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <ThemeToggle />
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <NavLink to="/my-library"><DropdownMenuItem>My Library</DropdownMenuItem></NavLink>
                <DropdownMenuItem onSelect={onLogoutClick}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={onLoginClick} className="hidden md:inline-flex bg-gradient-to-r from-red-600 to-red-800 text-white hover:scale-105 transition-transform duration-200">
              Login
            </Button>
          )}
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 backdrop-blur-lg">
              <div className="flex flex-col gap-4 p-4">
                <NavLink to="/" className="text-2xl font-extrabold text-center mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                    DRAMAWOK
                  </span>
                </NavLink>
                <nav className="flex flex-col gap-4 items-center">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      className={({ isActive }) =>
                        `text-lg font-medium transition-colors hover:text-red-500 ${
                          isActive ? "text-red-500" : "text-foreground"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
                {isLoggedIn ? (
                  <Button onClick={onLogoutClick} variant="outline" className="mt-6">Logout</Button>
                ) : (
                  <Button onClick={onLoginClick} className="mt-6 bg-gradient-to-r from-red-600 to-red-800 text-white hover:scale-105 transition-transform duration-200">
                    Login
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}