import Image from "next/image";
import { auth } from "@/auth";
import { character } from "@/data/character";
import Attributes from "@/components/Attributes";

export default async function EngineHome() {
  const session = await auth();

  return (
    <main className="flex flex-col items-center w-full h-screen p-20">
      <Image
        src={session?.user?.image ?? ""}
        alt={session?.user?.name ?? ""}
        width={100}
        height={100}
        className="rounded-full"
        priority
      />
      <h2 className="font-semibold text-2xl uppercase">
        {session?.user?.name ?? ""}
      </h2>
      <div>
        {character.basicInfo.gender} ({character.basicInfo.age}) -{" "}
        {character.basicInfo.location.city},{" "}
        {character.basicInfo.location.planet}
      </div>

      <div>{character.basicInfo.occupation}</div>

      <Attributes character={character} />
    </main>
  );
}
