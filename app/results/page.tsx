import { useSearchParams } from "next/navigation";

const Results = () => {
  const searchParams = useSearchParams();
  const guess = searchParams.get("guess");
  const correct = searchParams.get("correct");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Results</h1>

      <p className="text-lg mb-4">
        Your Guess: <span className="font-bold">{guess}</span>
      </p>
      <p className="text-lg mb-8">
        Correct Rank: <span className="font-bold">{correct}</span>
      </p>

      <a href="/game">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Play Again
        </button>
      </a>
    </div>
  );
};

export default Results;
