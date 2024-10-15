"use client";

import { useState, useEffect } from "react";
import gamesData from "@/data/gamesData";
import { useRouter } from "next/navigation";

const Game = () => {
  const [currentGame, setCurrentGame] = useState<null | (typeof gamesData)[0]>(
    null
  );
  const [guess, setGuess] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Randomly select a game clip when the component mounts
    const randomIndex = Math.floor(Math.random() * gamesData.length);
    setCurrentGame(gamesData[randomIndex]);
  }, []);

  const handleGuess = (rank: string) => {
    if (currentGame) {
      setGuess(rank);
      // Redirect to results page with the user's guess and the correct rank
      router.push(`/results?guess=${rank}&correct=${currentGame.correctRank}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Watch the Clip and Guess the Rank!
      </h1>
      {currentGame ? (
        <>
          <div className="mb-6">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${currentGame.videoId}`}
              title={currentGame.title}
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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Game;
