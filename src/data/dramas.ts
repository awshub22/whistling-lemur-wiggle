export interface Drama {
  id: number;
  title: string;
  genre: string;
  imageUrl: string;
  isBestSeller: boolean;
  isRecommended: boolean;
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
  },
  {
    id: 2,
    title: "Kingdom",
    genre: "Thriller",
    imageUrl: "https://placehold.co/400x600/141414/FFFFFF?text=Kingdom",
    isBestSeller: true,
    isRecommended: false,
  },
  {
    id: 3,
    title: "Vincenzo",
    genre: "Action",
    imageUrl: "https://placehold.co/400x600/00008B/FFFFFF?text=Vincenzo",
    isBestSeller: true,
    isRecommended: true,
  },
  {
    id: 4,
    title: "Hometown Cha-Cha-Cha",
    genre: "Comedy",
    imageUrl: "https://placehold.co/400x600/FFC0CB/000000?text=Hometown",
    isBestSeller: false,
    isRecommended: true,
  },
  {
    id: 5,
    title: "Mr. Queen",
    genre: "Historical",
    imageUrl: "https://placehold.co/400x600/DAA520/000000?text=Mr.+Queen",
    isBestSeller: false,
    isRecommended: false,
  },
  {
    id: 6,
    title: "Squid Game",
    genre: "Thriller",
    imageUrl: "https://placehold.co/400x600/F5266E/FFFFFF?text=Squid+Game",
    isBestSeller: true,
    isRecommended: true,
  },
  {
    id: 7,
    title: "Business Proposal",
    genre: "Comedy",
    imageUrl: "https://placehold.co/400x600/4682B4/FFFFFF?text=Business",
    isBestSeller: true,
    isRecommended: false,
  },
  {
    id: 8,
    title: "The Glory",
    genre: "Thriller",
    imageUrl: "https://placehold.co/400x600/333333/FFFFFF?text=The+Glory",
    isBestSeller: false,
    isRecommended: true,
  },
];