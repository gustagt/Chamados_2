import {SyntheticEvent, useEffect, useState } from "react";
import LabelForm from "../label/LabelForm";

import Image from "next/image";
import ButtonSecundary from "../buttons/ButtonSecundary";

import { redirect } from 'next/navigation';
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { postChamado } from "@/lib/slices/chamado.slice";
import ModalPrimary from "../modals/ModalPrimary";
import ModalSecondary from "../modals/ModalSecondary";
import ModalAssess from "../modals/ModalAssess";



export default function FormDefault({
  type,
  session,
  setores,
  atendimentos,
  sistemas,
}: FormDefaultProps) {

  const postChamadoStatus = useAppSelector((state) => state.chamadoState.loading)

  const dispatch = useAppDispatch()

  const [nome, setNome] = useState<string>(
    session?.user.name.substring(3) || ""
  );
  const [setor, setSetor] = useState<string>("");
  const [atendimento, setAtendimento] = useState<string>("");
  const [observacao, setObservacao] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sistema, setSistema] = useState<string>("");

  const [statusPage, setStatusPage] = useState<number>(0)




  function handleSubmit(event: SyntheticEvent){
    event.preventDefault()

    if(!session?.user) {
      alert('Sessão expirada.')
      redirect('/login')
    }

    const chamado: IProtocol = {
      name: nome,
      applicant: session.user.username,
      idOrigin: type,
      idSector: parseInt(setor),
      idService: parseInt(atendimento),
      idStatus: 1,
      details: observacao,
      email,
    }

    if(sistema) chamado.idSystem = parseInt(sistema)
      
    dispatch(postChamado({chamado, token: session.user.token}))

    if(type===1) return setStatusPage(1)
    setStatusPage(2)
  }
  
  return (
    <form className="flex flex-col gap-3 font-medium w-5/6 sm:w-3/4 md:w-2/4 " onSubmit={handleSubmit}>
        {postChamadoStatus === 'succeeded' && statusPage === 3 && type !== 5 && <ModalPrimary icon="checkGreeen" className="text-[#259F00]" classNameButton="bg-[#259F00]" text="Agora é só aguardar. Em breve um integrante de nossa equipe estará atendendo sua solicitação."/> }
      {postChamadoStatus === 'succeeded' && statusPage === 3 && type === 5 && <ModalPrimary icon="outlet" className="text-[#3B4A75]" classNameButton="bg-[#3B4A75]" text="Você já pode retirar seu periférico na TI, traga o antigo para a troca."/> }
      {postChamadoStatus === 'succeeded' && statusPage === 1 &&  <ModalSecondary pathIcon="/icons/alertBig.svg" altIcon="Alerta" handleStatusPage={setStatusPage}/> }
      {postChamadoStatus === 'succeeded' && statusPage === 2 && <ModalAssess pathIcon="/icons/star.svg" altIcon="Estrela" handleStatusPage={setStatusPage} /> }
      
      
      
      <label htmlFor="" className="flex flex-col ">
        <LabelForm text="Nome:" required />
        <input
          className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </label>
      <label htmlFor="" className="flex flex-col">
        <LabelForm text="Setor:" required />

        <select
          name="setores"
          id="setores"
          className="outline outline-1 outline-black rounded-sm h-8 px-2 max-w-[80vw] sm:max-w-none  sm:max-w-none bg-white"
          value={setor}
          onChange={(e) => setSetor(e.target.value)}
          required
        >
          <option></option>
          {setores &&
            setores.map((setor: { id: number; sector: string }) => (
              <option key={`setor-${setor.id}`} value={setor.id}>
                {setor.sector}
              </option>
            ))}
        </select>
      </label>

      <label htmlFor="" className="flex flex-col">
        <LabelForm text="Descrição do chamado:" required />

        <select
          name="atendimento"
          id="atendimento"
          className="outline outline-1 outlineu-black rounded-sm px-2 h-8 bg-white"
          value={atendimento}
          onChange={(e) => setAtendimento(e.target.value)}
          required
        >
          <option></option>

          {(type !== 0) && atendimentos &&
            atendimentos.map(
              (atendimento: { id: number; service: string }) => (
                <option
                  key={`atendimento-${atendimento.id}`}
                  value={atendimento.id}
                >
                  {atendimento.service}
                </option>
              )
            )}
          <option value="0">Outros</option>

        </select>
      </label>
      {type === 6 && (
        <label htmlFor="" className="flex flex-col">
          Sistema:
          <select
            name="sistema"
            id="sistema"
            className="outline outline-1 outlineu-black rounded-sm px-2 h-8 bg-white"
            value={sistema}
            onChange={(e) => setSistema(e.target.value)}
            required
          >
          <option></option>

            {sistemas &&
              sistemas.map(
                (sistemas: {
                  id: number;
                  system: string;
                }) => (
                  <option
                    key={`sistemas-${sistemas.id}`}
                    value={sistemas.id}
                  >
                    {sistemas.system}
                  </option>
                )
              )}
          <option value="0">Outros</option>                                                                                                                                                                                                                                                                                                                                                                      
              
          </select>
        </label>
      )}
      <label htmlFor="" className="flex flex-col">
        <LabelForm text="Observacao:" />

        <textarea
          className="outline outline-1 outlineu-black rounded-sm p-2"
          name="observacao"
          id="observacao"
          rows={4}
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
        ></textarea>
      </label>
      <label htmlFor="" className="flex flex-col">
        <LabelForm text="Email:" />

        <input
          className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <span className="flex text-sm text-zinc-500 mt-2 gap-2 ">
        <Image
          src="/icons/Warning.svg"
          alt="Atenção"
          width={16}
          height={16}
          className="self-start pt-0.5"
        />
        Caso deseje receber o retorno do chamado preencher com algum e-mail
        válido.
      </span>
      <div className="flex justify-end">
          <ButtonSecundary text="Enviar" />
        </div>

    </form>
  );
}

type FormDefaultProps = {
  type: number;
  session: any;
  setores: [];
  atendimentos: [];
  sistemas?: [];
};
