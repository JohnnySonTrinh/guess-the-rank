import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Guess the Rank!</h1>
      <p className="mb-8 text-lg text-center">
        Watch the video clip and guess the rank of the gameplay.
      </p>

      <Link href="/game">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Game
        </button>
      </Link>
    </div>
  );
}
