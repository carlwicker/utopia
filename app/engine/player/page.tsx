import Image from "next/image";
import { auth } from "@/auth";
import { playerDetails } from "@/data/playerDetails";
import Attributes from "@/components/Attributes";
import Skills from "@/components/Skills";

export default async function EngineHome() {
  const session = await auth();

  return (
    <main className="container mx-auto flex flex-col items-center w-full h-screen p-10 capitalize gap-20">
      <div className="flex gap-5">
        <Image
          src={session?.user?.image ?? ""}
          alt={session?.user?.name ?? ""}
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
        <div>
          <h2 className="font-bold text-2xl">{session?.user?.name ?? ""}</h2>
          <div>
            {playerDetails.basicInfo.gender} ({playerDetails.basicInfo.age}) -{" "}
            {playerDetails.basicInfo.location.city},{" "}
            {playerDetails.basicInfo.location.planet}
          </div>
          <div>{playerDetails.basicInfo.occupation}</div>
        </div>
      </div>

      <Attributes playerDetails={playerDetails} />
      <Skills playerDetails={playerDetails} />
    </main>
  );
}
