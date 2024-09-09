

import { CardChamado } from "@/components/card";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(nextAuthOptions)
  return (
    <div className="grid gap-2 grid-cols-2 m-4 h-[96vh]">
   
      <div className="flex flex-col items-center gap-32">
        <div className="self-start p-4  text-center">
          <Image
          className="mb-2"
            src="/icons/back.svg"
            alt="Informatica Icone"
            width={38}
            height={38}
          ></Image>
          <span>Voltar</span>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/icons/Workstation.svg"
              alt="Informatica Icone"
              width={168}
              height={140}
            ></Image>
            <span className="text-2xl font-medium">Informática</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/icons/Tools.svg"
              alt="Informatica Icone"
              width={168}
              height={140}
            ></Image>
            <span className="text-2xl font-medium">Manutenção Predial </span>
          </div>
        </div>
      </div>
      <CardChamado side="right" />
    </div>
  );
}
