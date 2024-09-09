import { ButtonOne, ButtonTwo } from "@/components/buttons";
import { CardChamado } from "@/components/card";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid gap-2 grid-cols-2 m-4 h-[96vh]">
      <CardChamado side="left" />
      <div className="grid grid-rows-5 ">
        <div></div>

        <div className="row-span-3 flex justify-center items-center">
          <div className="flex flex-col w-1/3 min-w-40">
            <label htmlFor="" className="font-semibold">
              Protocolo:
            </label>
            <input
              type="text"
              className="outline outline-1 outlineu-black rounded-sm h-8 px-2 "
            />
            <div className="flex mt-4 justify-between gap-3">
              <ButtonOne text="Consultar Chamado"></ButtonOne>
            </div>

            <span className="flex text-sm text-zinc-500 mt-2 gap-2 ">
              <Image
                src="/icons/Warning.svg"
                alt="Atenção"
                width={18}
                height={18}
                className="self-start pt-0.5"
              />
              Digite o protocolo passado quando o chamado foi fechado.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
