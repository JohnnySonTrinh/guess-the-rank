"use client"; // Required for using useState and useRouter

import { useState } from "react";
import { useRouter } from "next/navigation";

const Game = () => {
  const [guess, setGuess] = useState<string | null>(null);
  const router = useRouter();

  const handleGuess = (rank: string) => {
    setGuess(rank);
    router.push(`/results?guess=${rank}&correct=Gold`); // Replace 'Gold' with actual rank
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Watch the Clip and Guess the Rank!
      </h1>

      {/* Video Player */}
      <div className="mb-6">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with actual video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Guess Buttons */}
      <div className="flex space-x-4">
        {["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond"].map(
          (rank) => (
            <button
              key={rank}
              onClick={() => handleGuess(rank)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {rank}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Game;
