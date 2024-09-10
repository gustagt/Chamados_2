import Image from "next/image";
import CardChamadoOne from "@/components/cards/CardChamadoOne";
import Link from "next/link";

export default async function Page() {
 
  return (
    <div className="grid gap-2 grid-cols-2 m-4 h-[96vh]">
      <div className="flex flex-col self-center gap-32">
        <div className="flex flex-col gap-12">
          <Link href="/chamados/informatica" className="flex flex-col items-center gap-3">
            <Image
              src="/icons/Workstation.svg"
              alt="Informatica"
              width={168}
              height={140}
            ></Image>
            <span className="text-2xl font-medium">Informática</span>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-3">
            <Image
              src="/icons/Tools.svg"
              alt="Manutenção predial"
              width={168}
              height={140}
            ></Image>
            <span className="text-2xl font-medium">Manutenção Predial </span>
          </Link>
        </div>
      </div>
      <CardChamadoOne logout={true}/>
    </div>
  );
}
