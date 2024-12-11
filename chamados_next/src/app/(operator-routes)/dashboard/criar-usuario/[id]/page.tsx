"use client";
import ButtonLogout from "@/components/buttons/ButtonLogout";
import LabelCreateUser from "@/components/label/LabelCreateUser";

import IconLinkNav from "@/components/links/IconLinkNav";
import ModalFinish from "@/components/modals/ModalFinish";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import getCookie from "@/lib/hooks/useSession";
import { getChamadoId, resetLoading } from "@/lib/slices/chamado.slice";

import Link from "next/link";
import { useParams } from "next/navigation";
import { SyntheticEvent, useEffect, useRef, useState } from "react";

export default function Page() {
  const initialized = useRef(false);

  const session = getCookie('user-ti')
  const { id } = useParams<{ id: string }>();

  const [modal, setModal] = useState<{
    modal: "finish" ;
    protocol: IProtocol;
  }>();
  useEffect(() => {
    if (!initialized.current && session?.user.token) {
      dispatch(
        getChamadoId({
          id: Number(id),
          token: session.user.token,
          role: session?.user.role,
        })
      );
      initialized.current = true;
    }
  });

  const dispatch = useAppDispatch();

  const { chamado: protocol, loading } = useAppSelector(
    (state) => state.chamadoState
  );

  const handleUpProtocol = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(resetLoading())

    if(!protocol) return 

    setModal({ modal: "finish", protocol: protocol });
    
  };

  
  return (
    <div className="flex flex-col gap-20">
      <div className="bg-teclado bg-cover h-fit md:h-40">
        {modal?.modal === "finish" && <ModalFinish protocol={modal.protocol} cancelModal={setModal}/>}
        <nav className="hidden md:flex justify-between bg-[#1e1e1eda] h-full text-white ">
          <IconLinkNav pathLink="/dashboard" />
          <h1 className="text-2xl md:text-4xl text-center font-semibold self-center ">
            Criação de Usuário - Chamado ID {protocol?.id}
          </h1>
          <ButtonLogout type="user-ti" color="white"/>
        </nav>
        <nav className="flex flex-col md:hidden justify-between bg-[#1e1e1eda] h-full text-white ">
          <div className="flex justify-between">
            <IconLinkNav pathLink="/dashboard" />
            <ButtonLogout type="user-ti" color="white"/>
          </div>
          <h1 className="text-2xl text-center font-semibold self-center w-4/6  pb-4">
            Criação de Usuário - Chamado ID {protocol?.id}
          </h1>
        </nav>
      </div>
      <form
        onSubmit={handleUpProtocol}
        className="flex flex-col self-center font-medium gap-4 w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 md:h-[68vh] h-[64vh] "
      >
        <div className="flex gap-6 ">
          <LabelCreateUser label="Nome" text={protocol?.user?.name || ""} />
          <LabelCreateUser
            label="Função"
            text={protocol?.user?.function || ""}
          />
        </div>
        <div className="flex gap-6">
          <LabelCreateUser
            label="Setor"
            text={protocol?.sector?.sector || ""}
          />
          <LabelCreateUser
            label="Forma de Contratação"
            text={protocol?.user?.contractType?.contractType || ""}
          />
        </div>
        <div className="flex gap-6">
          <LabelCreateUser
            label="Superior Imediato"
            text={protocol?.name || ""}
          />
          <LabelCreateUser
            label="E-mail do Superior"
            text={protocol?.email || ""}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span className="text-[#848282]">Acesso:</span>
          <div className="flex gap-6 ">
            {protocol?.user?.accesses && protocol?.user?.accesses.map((access) => (
              <span key={access.id}>{access.access}</span>
            ))}
          </div>
        </div>
        <div className="flex self-end w-2/4 justify-between gap-2 ">
          <Link href={`/dashboard/editar/${protocol?.id}`} className="border border-[#313131] rounded w-full py-1 text-center">
            Editar
          </Link>
          <button className="border bg-[#313131] rounded text-white w-full py-1">
            Finalizar
          </button>
        </div>
      </form>
    </div>
  );
}
