import Image from "next/image";
import ButtonSecundary from "../buttons/ButtonSecundary";
import LabelForm from "../label/LabelForm";
import LabelInputRadio from "../label/LabelInputRadio";
import { Dispatch, SetStateAction, SyntheticEvent, useEffect, useRef, useState } from "react";
import { Session } from "next-auth";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks/redux";
import { getAcessos } from "@/lib/slices/acesso.slice";
import { redirect } from "next/navigation";
import { postChamado } from "@/lib/slices/chamado.slice";
import ModalPrimary from "../modals/ModalPrimary";
import ModalAssess from "../modals/ModalAssess";



export default function FormCreateUser({
  type,
  session,
  setores,
  handleError
}: FormCreateUserProps) {
  const store = useAppStore();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current && session?.user.token) {
      store.dispatch(getAcessos({token: session.user.token}));
      initialized.current = true;
    }
  });

  const { acessos, error: errorAcesso } = useAppSelector((state) => state.acessoState);
  const {chamado:protocol, loading: postChamadoStatus} = useAppSelector((state) => state.chamadoState)

  const dispatch = useAppDispatch();

  const [nome, setNome] = useState<string>("");
  const [setor, setSetor] = useState<string>("");
  const [funcao, setFuncao] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [acessoForm, setAcessoForm] = useState<string[]>([]);
  const [tipoContratacao, setTipoContratacao] = useState<string>("");

  const [statusPage, setStatusPage] = useState<number>()


  useEffect(() => {
    if(errorAcesso) return handleError(errorAcesso)
    return handleError('')
  }, [errorAcesso, handleError]);

  function handleAcessoSelect(acesso: string) {
    const newAcessoForm = [...acessoForm, acesso];
    setAcessoForm(newAcessoForm);
  }

  function handleAcessoDelete(acesso: string) {
    const newAcessoForm = acessoForm.filter((item) => item !== acesso);
    setAcessoForm(newAcessoForm);
  }



  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (!session?.user) {
      alert("Sessão expirada.");
      redirect("/login");
    }

    const chamado: IProtocol = {
      name: session.user.name.substring(3),
      applicant: session.user.username,
      idOrigin: type,
      idSector: parseInt(setor),
      idService: 48,
      idStatus: 1,
      email,
      user: {
        name: nome,
        function: funcao,
        idContractType: parseInt(tipoContratacao),
        idAccesses: acessoForm.map(Number),
      },
    };

    dispatch(postChamado({ chamado, token: session.user.token }));

    setStatusPage(2)
  }

  return (
    <form
      className="flex flex-col gap-3 font-medium w-5/6 sm:w-3/4 md:w-2/4"
      onSubmit={handleSubmit}
    >
      {postChamadoStatus === 'succeeded' && statusPage === 3 && <ModalPrimary icon="checkGreeen" className="text-[#259F00]" classNameButton="bg-[#259F00]"  text="Agora é só aguardar. Em breve um integrante de nossa equipe estará atendendo sua solicitação."/> }
      {postChamadoStatus === 'succeeded' && statusPage === 2 && <ModalAssess pathIcon="/icons/star.svg" altIcon="Estrela" handleStatusPage={setStatusPage} /> }
      
      
      <span className="flex text-sm font-normal text-red-500">
        <Image
          className="self-start pt-0.5"
          src="/icons/alert.svg"
          alt="exluir"
          width={16}
          height={12}
        />
        A criação de usuários deve ser realizada pelo responsável do setor!
      </span>
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
        <LabelForm text="E-mail:" required />

        <input
          className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label htmlFor="" className="flex flex-col">
        <LabelForm text="Setor:" required />

        <select
          name="setores"
          id="setores"
          className="outline outline-1 outlineu-black rounded-sm h-8 px-2 max-w-[80vw] sm:max-w-none bg-white"
          value={setor}
          onChange={(e) => setSetor(e.target.value)}
          required
        >
          <option></option>
          {setores &&
            setores.map((setor: { id: number; sector: string }) => (
              <option key={`setor-${setor.id}`}   value={setor.id}>
                {setor.sector}
              </option>
            ))}
        </select>
      </label>      
      {acessos && (
        <>
          <label htmlFor="" className="flex flex-col">
            <LabelForm text="Acessos:" required />

            <select
              name="acessos"
              id="acessos"
              className="outline outline-1 outlineu-black rounded-sm px-2 h-8    bg-white"
              onChange={(e) => handleAcessoSelect(e.target.value)}
            >
              <option></option>
              {acessos &&
                acessos.map((acesso: { id: number; access: string }) => (
                  <option key={`acesso-${acesso.id}`} value={acesso.id}>
                    {acesso.access}
                  </option>
                ))}
            </select>
          </label>
          <div className="flex flex-col">
            <LabelForm text="Pastas Selecionadas:" />

            <div className="flex flex-wrap gap-2 outline outline-1 outlineu-black rounded-sm min-h-8 p-2">
              {acessoForm &&
                acessos &&
                acessos.map(
                  (acesso: { id: number; access: string }) =>
                    acessoForm.includes(String(acesso.id)) && (
                      <div
                        key={`acessoSelecionado-${acesso.id}`}
                        className="flex  justify-between gap-1 bg-[#E5E5E5] text-[#727272] px-1 rounded-r-full cursor-pointer"
                        onClick={() => handleAcessoDelete(String(acesso.id))}
                      >
                        {acesso.access}
                        <Image
                          src="/icons/x.svg"
                          alt="exluir"
                          width={12}
                          height={12}
                        />
                      </div>
                    )
                )}
            </div>
          </div>
        </>
      )}

      <label htmlFor="" className="flex flex-col">
        <LabelForm text="Função:" required />

        <input
          className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
          type="text"
          value={funcao}
          onChange={(e) => setFuncao(e.target.value)}
          required
        />
      </label>
      <label htmlFor="" className="flex flex-col">
        <LabelForm text="Superior Imediato:" />

        <div className="outline outline-1 outlineu-black rounded-sm h-8 px-2 content-center">
          {session?.user.name.substring(3)}
        </div>
      </label>
      <label htmlFor="" className="flex flex-col ">
        Forma de Contratação:
        <div className="flex justify-between gap-2 flex-wrap">
          <LabelInputRadio
            id="estagiario"
            text="Estagiario"
            value={1}
            inputFamily="tipoContratacao"
            setValue={setTipoContratacao}
            required
          />
          <LabelInputRadio
            id="terceirizado"
            text="Terceirizado"
            value={2}
            inputFamily="tipoContratacao"
            setValue={setTipoContratacao}
            required
          />
          <LabelInputRadio
            id="comissionado"
            text="Comissionado"
            value={3}
            inputFamily="tipoContratacao"
            setValue={setTipoContratacao}
            required
          />
          <LabelInputRadio
            id="efetivo"
            text="Efetivo"
            value={4}
            inputFamily="tipoContratacao"
            setValue={setTipoContratacao}
            required
          />
        </div>
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

type FormCreateUserProps = {
  session: any;
  setores: [];
  type: number;
  handleError: Dispatch<SetStateAction<string>>
};
