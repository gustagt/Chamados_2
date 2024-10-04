import Image from "next/image";
import CardChamadoOne from "@/components/cards/CardChamadoOne";
import Link from "next/link";
import IconWorkStation from "@/components/Icons/IconWorkStation";
import IconTools from "@/components/Icons/IconTools";

export default async function Page() {
 
  return (
    <div className="grid gap-16 md:gap-2 grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none m-4 md:h-[96vh]">
      <div className="flex flex-col self-center gap-32 order-2 md:order-none">
        <div className="flex flex-col gap-12">
          <Link href="/chamados/informatica" className="flex flex-col items-center gap-3">
            <IconWorkStation width={168} height={140} color="black"/>
            <span className="text-2xl font-medium">Informática</span>
          </Link>
          <Link href="/chamados/manutencao" className="flex flex-col items-center gap-3">
            <IconTools width={168} height={140}/>
            <span className="text-2xl font-medium">Manutenção Predial </span>
          </Link>
        </div>
      </div>
   
        <CardChamadoOne  logout={true}/>
   
    </div>
  );
}
