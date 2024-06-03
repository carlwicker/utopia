import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm";
import { SignIn } from "@/components/SignInButton";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <main className="flex flex-col justify-center w-full h-screen p-20 gap-10">
      <h1 className="text-6xl uppercase font-bold">Utopia//Engine</h1>
      <p className="text-2xl">
        Utopia represents a pioneering venture in AI-facilitated content
        generation, meticulously crafted to sculpt an infinitely vast and
        dynamic open universe.
      </p>
      <a href="mailto:carlwicker@gmail.com" className="text-2xl underline">
        carlwicker@gmail.com
      </a>

      {!session ? (
        <SignIn />
      ) : (
        <div className="flex flex-col gap-5">
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={100}
            height={100}
            className="rounded-full"
          />
          <p>Welcome {session?.user?.email}! You are logged in.</p>
          <button className="bg-blue-400 p-5 rounded text-white max-w-min">
            Enter
          </button>
        </div>
      )}
    </main>
  );
}
