"use client";
import ButtonLogout from "@/components/buttons/ButtonLogout";
import LabelFormOperator from "@/components/label/LabelFormOperator";
import LabelFormTextAreaOperator from "@/components/label/LabelFormTextAreaOperator";
import IconLinkNav from "@/components/links/IconLinkNav";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import {
  getChamadoId,
  resetLoading,
} from "@/lib/slices/chamado.slice";

import { useParams } from "next/navigation";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import LabelFormSelectOperator from "./../../../../../components/label/LabelFormSelectOperator";
import { getSetores } from "@/lib/slices/setor.slice";
import { getAtendimentoOrigemID } from "@/lib/slices/atendimento.slice";
import { getOrigens } from "@/lib/slices/origem.slice";
import { getStatus } from "@/lib/slices/status.slice";
import Link from "next/link";
import FormEditCreateUser from "@/components/forms/FormEditCreateUser";
import ModalEdit from "@/components/modals/ModalEdit";
import CardError  from '@/components/cards/CardError';
import getCookie from "@/lib/hooks/useSession";

export default function Page() {
  const initialized = useRef(false);

  const session = getCookie('user-ti')
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (!initialized.current && session?.user.token) {
      dispatch(
        getChamadoId({
          id: Number(id),
          token: session.user.token,
          role: session?.user.role,
        })
      );
      dispatch(
        getSetores({ token: session.user.token, role: session.user.role })
      );
      dispatch(
        getOrigens({ token: session.user.token, role: session.user.role })
      );
      dispatch(
        getStatus({ token: session.user.token, role: session.user.role })
      );
      initialized.current = true;
    }
  });

  const dispatch = useAppDispatch();

  const { chamado: protocol, error:errorProtocol } = useAppSelector(
    (state) => state.chamadoState
  );
  const { setores } = useAppSelector((state) => state.setorState);
  const { origens } = useAppSelector((state) => state.origemState);
  const { atendimentos } = useAppSelector((state) => state.atendimentoState);
  const { status: statusArray } = useAppSelector((state) => state.statusState);

  useEffect(() => {
    if (protocol) {
      setName(protocol.name);
      setOrigin(String(protocol.idOrigin));
      setSector(String(protocol.idSector));
      setService(String(protocol.idService));
      setDetails(protocol.details || "");
      setObservation(protocol.observation || "");
      setEmail(protocol.email || "");
      setStatus(String(protocol.idStatus));
    }
  }, [protocol]);

  const [name, setName] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [sector, setSector] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [observation, setObservation] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const [modal,setModal] = useState<{modal: "edit", protocol: IProtocol}>()

  useEffect(() => {

    if (origin) {
      dispatch(
        getAtendimentoOrigemID({
          origem: Number(origin),
          token: session?.user.token,
          role: session?.user.role,
        })
      );
    }
  }, [origin, dispatch]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(resetLoading())

    const protocolForm: IProtocol = {
      ...(protocol as IProtocol), // pega os dados ja existente e preenche
      name,
      idOrigin: Number(origin),
      idSector: Number(sector),
      idService: Number(service),
      idStatus: Number(status),
      details,
      observation,
      email,

      // idSystem: Number(system),
    };
    

    setModal({modal: "edit", protocol: protocolForm})
  };


  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <div className="bg-teclado bg-cover h-fit md:h-40  ">
        {modal?.modal === 'edit' && modal.protocol && <ModalEdit protocol={modal.protocol} cancelModal={setModal}/>}
        <nav className="hidden md:flex justify-between bg-[#1e1e1eda] h-full text-white ">
          <IconLinkNav pathLink="/dashboard" />
          <h1 className="text-2xl md:text-4xl text-center font-semibold self-center ">
            Editar Chamado ID {protocol?.id}
          </h1>
          <ButtonLogout type="user-ti" color="white"/>
        </nav>
        <nav className="flex flex-col md:hidden justify-between bg-[#1e1e1eda] h-full text-white ">
          <div className="flex justify-between">
            <IconLinkNav pathLink="/dashboard" />
            <ButtonLogout type="user-ti" color="white"/>
          </div>
          <h1 className="text-2xl text-center font-semibold self-center  pb-4">
            Editar Chamado ID {protocol?.id}
          </h1>
        </nav>
      </div>
      <div className="flex flex-col self-center font-medium gap-2 w-full md:min-h-[68vh]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col self-center font-medium gap-2 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6   "
        >
          {errorProtocol&&  <CardError title={errorProtocol }/>}
          <h2 className="text-[#848282] text-lg">Dados do Chamado</h2>
          <div className="flex flex-wrap gap-2 md:gap-6 md:flex-nowrap">
            <LabelFormOperator
              label="Solicitante"
              value={name}
              setValue={setName}
              required
            />
            <LabelFormSelectOperator
              label="Origem"
              value={origin}
              setValue={setOrigin}
              array={origens}
              required
            />
          </div>
          <div className="flex flex-wrap gap-2 md:gap-6 md:flex-nowrap">
            <LabelFormSelectOperator
              label="Setor"
              value={sector}
              setValue={setSector}
              array={setores}
              required
            />
            {atendimentos && (
              <LabelFormSelectOperator
                label="Descrição"
                value={service}
                setValue={setDetails}
                array={atendimentos}
                required
              />
            )}
          </div>
          <LabelFormTextAreaOperator
            label="Observação"
            value={details}
            setValue={setDetails}
          />
          <LabelFormTextAreaOperator
            label="Observação Interna"
            value={observation}
            setValue={setObservation}
          />
          <LabelFormOperator
            label="E-mail"
            type="email"
            value={email}
            setValue={setEmail}
          />
          <div className="flex flex-col md:flex-row gap-6 justify-between mb-12">
            <LabelFormSelectOperator
              label="Status"
              value={status}
              setValue={setStatus}
              array={statusArray}
              required
            />
            <div className="flex self-end w-full justify-between gap-2">
              <Link
                href="/dashboard"
                className="border border-[#313131] rounded w-full py-1 text-center"
              >
                Cancelar
              </Link>
              <button className="border bg-[#313131] rounded text-white w-full py-1">
                Salvar
              </button>
            </div>
          </div>
        </form>
          {origin === '3' && protocol && <FormEditCreateUser protocol={protocol} />}
      </div>
    </div>
  );
}
