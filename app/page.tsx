import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm";
import { SignIn } from "@/components/SignInButton";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <main className="flex flex-col justify-center w-full h-screen p-20 gap-10">
      <h1 className="text-6xl uppercase font-bold">Utopia</h1>
      <p className="text-2xl">
        Utopia represents a pioneering venture in AI-facilitated content
        generation, meticulously crafted to sculpt an infinitely vast and
        dynamic open universe.
      </p>
      <a href="mailto:carlwicker@gmail.com" className="text-2xl underline">
        carlwicker@gmail.com
      </a>
      <p>Welcome {session?.user?.email}! You are logged in.</p>
      <SignIn />
    </main>
  );
}
