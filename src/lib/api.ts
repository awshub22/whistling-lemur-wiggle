import type { Drama } from "@/data/dramas";

const API_BASE_URL = "https://api.dramawok.test"; // Ganti dengan URL backend Anda

export const getDramas = async (): Promise<Drama[]> => {
  // Ini adalah contoh. Anda perlu menyesuaikan dengan endpoint dan struktur data Anda.
  const response = await fetch(`${API_BASE_URL}/dramas`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  // Jika struktur data backend berbeda, Anda perlu memetakannya di sini
  // Contoh: return data.map(item => ({ id: item.drama_id, title: item.drama_title, ... }))
  return data;
};

// Nanti kita bisa tambahkan fungsi lain di sini, seperti:
// export const loginUser = async (email) => { ... };
// export const addToWatchlist = async (dramaId) => { ... };