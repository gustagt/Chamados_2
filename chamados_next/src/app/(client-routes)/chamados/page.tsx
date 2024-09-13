import Image from "next/image";
import CardChamadoOne from "@/components/cards/CardChamadoOne";
import Link from "next/link";

export default async function Page() {
 
  return (
    <div className="grid gap-2 grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none m-4 h-[96vh]">
      <div className="flex flex-col self-center gap-32 order-2 md:order-none">
        <div className="flex flex-col gap-12">
          <Link href="/chamados/informatica" className="flex flex-col items-center gap-3">
            <Image
            className="w-1/5 md:w-40"
              src="/icons/Workstation.svg"
              alt="Informatica"
              width={168}
              height={140}
            ></Image>
            <span className="text-2xl font-medium">Informática</span>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-3">
            <Image 
            className="w-1/5 md:w-40"
              src="/icons/Tools.svg"
              alt="Manutenção predial"
              width={168}
              height={140}
            ></Image>
            <span className="text-2xl font-medium">Manutenção Predial </span>
          </Link>
        </div>
      </div>
      <CardChamadoOne  logout={true}/>
    </div>
  );
}
