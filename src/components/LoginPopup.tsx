import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginSuccess: (email: string) => void;
}

export function LoginPopup({ open, onOpenChange, onLoginSuccess }: LoginPopupProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onLoginSuccess(email);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-background/90 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Masuk atau Daftar</DialogTitle>
          <DialogDescription className="text-center">
            Simpan riwayat tontonan dan drama favorit Anda dengan masuk menggunakan email.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white hover:scale-105 transition-transform duration-200">
            Lanjutkan
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}