"use client";

import CardFormulario from "@/components/cards/CardFormulario";
import { useAppSelector, useAppStore } from "@/lib/hooks/redux";
import { getSetores } from "@/lib/slices/setor.slice";
import { getAtendimentoOrigemID } from "@/lib/slices/atendimento.slice";
import { useEffect, useRef, useState } from "react";

import { useSession } from "next-auth/react";

import FormDefault from "@/components/forms/FormDefault";
import FormCreateUser from "@/components/forms/FormCreateUser";
import { getSistemas } from "@/lib/slices/sistema.slice";
import ButtonLogout from "@/components/buttons/ButtonLogout";

export default function Page({ params }: { params: { type: number } }) {
  const type = Number(params.type);

  const { data: session, status } = useSession();

  const store = useAppStore();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current && status === "authenticated") {
      store.dispatch(getSetores(session?.user.token));
      store.dispatch(getSistemas(session?.user.token));
      store.dispatch(
        getAtendimentoOrigemID({ origem: type, token: session?.user.token })
      );
      initialized.current = true;
    }
  });

  const { setores, error: errorSetor } = useAppSelector(
    (state) => state.setorState
  );
  const { atendimentos, error: errorAtendimento } = useAppSelector(
    (state) => state.atendimentoState
  );
  const { sistemas, error: errorSistema } = useAppSelector(
    (state) => state.sistemaState
  );

  const [error, setError] = useState<string>('');

  useEffect(() => {
    if(errorSetor) return setError(errorSetor)
    if(errorAtendimento) return setError(errorAtendimento)
    if(errorSistema) return setError(errorSistema)
    return setError('')
  }, [errorSetor, errorAtendimento,errorSistema]);

  return (
    <div className="grid gap-2 grid-rows-2 m-4 grid-cols-none md:grid-cols-2 md:grid-rows-none  md:h-[96vh] ">
      <CardFormulario type={type} />
      <div className="flex flex-col items-center h-full gap-16">
        <div className="grid grid-cols-4 w-full text-center">
          <h2 className="col-start-2 col-span-2 text-3xl  pt-16">
            Dados do chamado
          </h2>

          <ButtonLogout
            pathIcon="/icons/logout.svg"
            className="hidden md:block"
          />
        </div>
        {error && (
        <div className="bg-red-500 flex flex-col justify-center items-center text-white p-6 rounded-md">
          <h3 className="text-lg">Erro</h3>
          <span>{error}</span>
        </div>
      )}

        {type !== 3 ? (
          <FormDefault
            session={session}
            type={type}
            atendimentos={atendimentos}
            setores={setores}
            sistemas={sistemas}
          />
        ) : (
          <FormCreateUser session={session} setores={setores} type={type} handleError={setError}/>
        )}
      </div>
    </div>
  );
}
