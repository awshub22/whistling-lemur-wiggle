export interface Drama {
  id: number;
  title: string;
  genre: string;
  imageUrl: string;
  isBestSeller: boolean;
  isRecommended: boolean;
  synopsis: string;
  rating: number;
  year: number;
  episodes: number;
  duration: number; // in minutes
  status: "Completed" | "Ongoing";
  cast: string[];
  director: string;
}

export const genres = ["All", "Romance", "Action", "Comedy", "Thriller", "Historical"];

export const dramas: Drama[] = [
  {
    id: 1,
    title: "Crash Landing on You",
    genre: "Romance",
    imageUrl: "https://placehold.co/400x600/E50914/FFFFFF?text=CLOY",
    isBestSeller: true,
    isRecommended: true,
    synopsis: "A South Korean heiress accidentally paraglides into North Korea, where she falls in love with a North Korean army officer who decides he will help her hide.",
    rating: 4.9,
    year: 2019,
    episodes: 16,
    duration: 85,
    status: "Completed",
    cast: ["Hyun Bin", "Son Ye-jin", "Seo Ji-hye"],
    director: "Lee Jeong-hyo",
  },
  {
    id: 2,
    title: "Kingdom",
    genre: "Thriller",
    imageUrl: "https://placehold.co/400x600/141414/FFFFFF?text=Kingdom",
    isBestSeller: true,
    isRecommended: false,
    synopsis: "While strange rumors about their ill king grip a kingdom, the crown prince becomes their only hope against a mysterious plague overtaking the land.",
    rating: 4.7,
    year: 2019,
    episodes: 12,
    duration: 50,
    status: "Completed",
    cast: ["Ju Ji-hoon", "Ryu Seung-ryong", "Bae Doona"],
    director: "Kim Seong-hun",
  },
  {
    id: 3,
    title: "Vincenzo",
    genre: "Action",
    imageUrl: "https://placehold.co/400x600/00008B/FFFFFF?text=Vincenzo",
    isBestSeller: true,
    isRecommended: true,
    synopsis: "During a visit to his motherland, a Korean-Italian mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice.",
    rating: 4.8,
    year: 2021,
    episodes: 20,
    duration: 80,
    status: "Completed",
    cast: ["Song Joong-ki", "Jeon Yeo-been", "Ok Taec-yeon"],
    director: "Kim Hee-won",
  },
  {
    id: 4,
    title: "Hometown Cha-Cha-Cha",
    genre: "Comedy",
    imageUrl: "https://placehold.co/400x600/FFC0CB/000000?text=Hometown",
    isBestSeller: false,
    isRecommended: true,
    synopsis: "A big-city dentist opens up a practice in a close-knit seaside village, home to a charming jack-of-all-trades who is her polar opposite in every way.",
    rating: 4.6,
    year: 2021,
    episodes: 16,
    duration: 75,
    status: "Completed",
    cast: ["Shin Min-a", "Kim Seon-ho", "Lee Sang-yi"],
    director: "Yoo Je-won",
  },
  {
    id: 5,
    title: "Mr. Queen",
    genre: "Historical",
    imageUrl: "https://placehold.co/400x600/DAA520/000000?text=Mr.+Queen",
    isBestSeller: false,
    isRecommended: false,
    synopsis: "A modern-day chef gets trapped in the body of a queen from the Joseon dynasty, leading to chaos and comedy within the royal palace.",
    rating: 4.7,
    year: 2020,
    episodes: 20,
    duration: 80,
    status: "Completed",
    cast: ["Shin Hye-sun", "Kim Jung-hyun", "Bae Jong-ok"],
    director: "Yoon Sung-sik",
  },
  {
    id: 6,
    title: "Squid Game",
    genre: "Thriller",
    imageUrl: "https://placehold.co/400x600/F5266E/FFFFFF?text=Squid+Game",
    isBestSeller: true,
    isRecommended: true,
    synopsis: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    rating: 4.8,
    year: 2021,
    episodes: 9,
    duration: 60,
    status: "Completed",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon"],
    director: "Hwang Dong-hyuk",
  },
];