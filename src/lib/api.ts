import type { Drama } from "@/data/dramas";

const API_BASE_URL = "/api"; // Menggunakan path relatif untuk proxy

export const getDramas = async (): Promise<Drama[]> => {
  // Sekarang ini akan diarahkan ke http://localhost:3400/api/dramas
  const response = await fetch(`${API_BASE_URL}/dramas`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

// Nanti kita bisa tambahkan fungsi lain di sini, seperti:
// export const loginUser = async (email) => { ... };
// export const addToWatchlist = async (dramaId) => { ... };