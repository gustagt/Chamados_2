"use client";

import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import CardChamadoOne from "@/components/cards/CardChamadoOne";
import ModalConsult from "@/components/modals/ModalConsult";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks/redux";
import { getChamadoId, reset } from "@/lib/slices/chamado.slice";


import Image from "next/image";
import { SyntheticEvent, useEffect, useState } from "react";
import getCookie from "@/lib/hooks/useSession";


export default function Page() {
  const session = getCookie('user')
  const { chamado, error } = useAppSelector((state) => state.chamadoState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const [idProtocol, setIdProtocol] = useState<string>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!idProtocol) return;

    dispatch(
      getChamadoId({ id: Number(idProtocol), token: session?.user.token })
    );
  };

  return (
    <div className="grid gap-2 grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none m-4 h-[96vh]">
      {chamado && <ModalConsult chamado={chamado}  />}
      <CardChamadoOne back={true} />
      <div className="grid grid-rows-5 ">
        <div></div>
        <form
          className="row-span-3 flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          
          <div className="flex flex-col  w-2/3 md:w-1/3 min-w-40">
          
            <label htmlFor="" className="font-semibold">
              Protocolo:
            </label>
            <input
              type="number"
              className="outline outline-1 outlineu-black rounded-sm h-8 px-2 "
              value={idProtocol}
              onChange={(e) => setIdProtocol(e.target.value)}
              required
            />
            {error && (
            <div className="bg-red-500 flex flex-col text-center justify-center items-center text-white p-6 mt-4  rounded-md">
              <span>{error}</span>
            </div>
          )}
            <div className="flex mt-4 justify-between gap-3">
              <ButtonPrimary text="Consultar Chamado"></ButtonPrimary>
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
        </form>
      </div>
    </div>
  );
}
