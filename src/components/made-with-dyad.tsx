import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export const MadeWithDyad = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    // TODO: Ganti ini dengan panggilan API ke backend Anda
    // Contoh: fetch('/api/visits').then(res => res.json()).then(data => setVisitCount(data.totalVisits));

    // Simulasi pengambilan data dari backend
    const fakeApiCall = setTimeout(() => {
      setVisitCount(12345); // Angka contoh
    }, 1500);

    return () => clearTimeout(fakeApiCall);
  }, []);

  return (
    <div className="p-4 text-center flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Eye className="w-4 h-4" />
        <span>
          {visitCount !== null ? visitCount.toLocaleString() : "Loading..."}
        </span>
        <span className="hidden sm:inline-block">- Total Visitors</span>
      </div>
      <a
        href="https://www.dyad.sh/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        Made with Dyad
      </a>
    </div>
  );
};