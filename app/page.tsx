import { auth } from "@/auth";
import { SignIn } from "@/components/SignInButton";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <main className="container mx-auto flex flex-col justify-center w-full h-screen p-10 gap-20">
      <h1 className="text-6xl uppercase font-bold">Utopia//Engine</h1>
      <p className="text-4xl">
        Utopia represents a pioneering venture in AI-facilitated content
        generation, meticulously crafted to sculpt an infinitely vast and
        dynamic open universe.
      </p>
      <p className="text-2xl">
        Utopia is a massive sandbox set in the year 2224, depicting a dystopian
        futuristic universe. This expansive, AI-driven world-building experiment
        delves into a bleak future, combining advanced content generation
        algorithms with intricate narrative design. Within this intricate and
        open-ended universe, players navigate a richly detailed environment
        where societal decay, technological advancements, and survival
        challenges converge, creating a deeply immersive and continually
        evolving experience.
      </p>

      {!session ? (
        <SignIn />
      ) : (
        <Link
          href="/engine"
          className="bg-blue-400 p-5 rounded text-white max-w-min"
        >
          Enter
        </Link>
      )}
    </main>
  );
}
