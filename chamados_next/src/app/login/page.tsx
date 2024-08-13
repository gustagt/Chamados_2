import { ButtonOne, ButtonTwo } from "@/components/buttons";
import { CardChamado } from "@/components/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid gap-2 grid-cols-2 m-4 h-[96vh]">
      <CardChamado />
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-1/3 min-w-60">
          <label htmlFor="" className="font-semibold">
            Usuário:
          </label>
          <input
            type="text"
            className="outline outline-1 outlineu-black rounded-sm h-8 px-2 mb-2 "
          />
          <label htmlFor="" className="font-semibold">
            Senha:
          </label>
          <input
            type="password"
            className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
          />
          <div className="flex mt-7 justify-between gap-3">
            <ButtonOne text="Entrar"></ButtonOne>

            <ButtonTwo text="Consultar Chamado"></ButtonTwo>
          </div>
        </div>
      </div>
    </div>
  );
}


// <div className="grid gap-2 grid-cols-2 m-4 h-[96vh]">
//       <div className="flex flex-col items-center gap-32">
//         <div className="self-start">
//           <Image
//             src="/icons/back.svg"
//             alt="Informatica Icone"
//             width={42}
//             height={42}
//           ></Image>
//           <span>Voltar</span>
//         </div>
//         <div className="flex flex-col gap-12">
//           <div className="flex flex-col items-center gap-3">
//             <Image
//               src="/icons/Workstation.svg"
//               alt="Informatica Icone"
//               width={168}
//               height={140}
//             ></Image>
//             <span className="text-2xl font-medium">Informática</span>
//           </div>
//           <div className="flex flex-col items-center gap-3">
//             <Image
//               src="/icons/Tools.svg"
//               alt="Informatica Icone"
//               width={168}
//               height={140}
//             ></Image>
//             <span className="text-2xl font-medium">Manutenção Predial </span>
//           </div>
//         </div>
//       </div>