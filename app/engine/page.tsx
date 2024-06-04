import Image from "next/image";
import { auth } from "@/auth";
import { character } from "@/data/character";

export default async function EngineHome() {
  const session = await auth();

  console.log(session);

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen p-20 gap-10">
      <div className="flex flex-col gap-2 mx-auto">
        <Image
          src={session?.user?.image ?? ""}
          alt={session?.user?.name ?? ""}
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
        <p className="text-center font-semibold">
          {character.basicInfo.name ?? ""}
        </p>
      </div>
    </main>
  );
}
