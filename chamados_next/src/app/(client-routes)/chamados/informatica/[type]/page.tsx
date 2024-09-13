"use client";
import CardFormulario from "@/components/cards/CardFormulario";
import { useAppSelector, useAppStore } from "@/lib/hooks/redux";
import { getSetores } from "@/lib/slices/setor.slice";
import { getAtendimentoOrigemID } from "@/lib/slices/atendimento.slice";
import { useRef, useState } from "react";

import { useSession } from "next-auth/react";

import FormDefault from "@/components/forms/FormDefault";
import FormCreateUser from "@/components/forms/FormCreateUser";
import { getSistemas } from "@/lib/slices/sistema.slice";
import ButtonLogout from "@/components/buttons/ButtonLogout";

export default function Page({ params }: { params: { type: number } }) {
  const type = Number(params.type);
  const { data: session } = useSession();

  const store = useAppStore();
  const initialized = useRef(false);

  if (!initialized.current) {
    store.dispatch(getSetores(session?.user.token));
    store.dispatch(getSistemas(session?.user.token));
    store.dispatch(
      getAtendimentoOrigemID({ origem: type, token: session?.user.token })
    );
    initialized.current = true;
  }

  const setores = useAppSelector((state) => state.setorState.setores);
  const atendimentos = useAppSelector(
    (state) => state.atendimentoState.atendimentos
  );
  const sistemas = useAppSelector(
    (state) => state.sistemaState.sistemas
  );

  return (
    <div className="grid gap-2 grid-rows-2 m-4 grid-cols-none md:grid-cols-2 md:grid-rows-none  md:h-[96vh] ">
      <CardFormulario type={type} />
      <form className="flex flex-col items-center h-full gap-16">
        <div className="grid grid-cols-4 w-full text-center">
          <h2 className="col-start-2 col-span-2 text-3xl  pt-16">
            Dados do chamado
          </h2>

     
          <ButtonLogout pathIcon="/icons/logout.svg" className="hidden md:block"/>
        </div>
        {type !== 3 ? (
          <FormDefault
            session={session}
            type={type}
            atendimentos={atendimentos}
            setores={setores}
            sistemas={sistemas}
          />
        ) : (
          <FormCreateUser session={session} setores={setores}  />
        )}
        
      </form>
    </div>
  );
}
