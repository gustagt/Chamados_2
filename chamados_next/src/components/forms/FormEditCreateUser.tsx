import Link from "next/link";
import LabelFormOperator from "../label/LabelFormOperator";
import LabelFormSelectOperator from "../label/LabelFormSelectOperator";
import { SyntheticEvent, useEffect, useRef, useState } from "react";

import { getTiposContratacoes } from "@/lib/slices/tiposContratacoes.slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { getAcessos } from "@/lib/slices/acesso.slice";
import LabelForm from "../label/LabelForm";
import Image from "next/image";
import ModalEditUser from "../modals/ModalEditUser";
import { reset, resetLoading } from "@/lib/slices/user.slice";
import CardError from "../cards/CardError";
import getCookie from "@/lib/hooks/useSession";

export default function FormEditCreateUser({
  protocol,
}: FormEditCreateUserProps) {
  const initialized = useRef(false);

  const session = getCookie('user-ti')
  useEffect(() => {
    if (!initialized.current && session?.user.token) {
    dispatch(getAcessos({token: session.user.token, role: session?.user.role}));
      dispatch(
        getTiposContratacoes({
          token: session.user.token,
          role: session?.user.role,
        })
      );
      dispatch(reset())

      initialized.current = true;
    }
  });

  const dispatch = useAppDispatch();

  const { tiposContratacoes: contractTypes, loading } = useAppSelector(
    (state) => state.tiposContratacoesState
  );
  const { acessos, error: errorAcesso } = useAppSelector((state) => state.acessoState);
  const { error: errorUser } = useAppSelector((state) => state.userState);

  useEffect(() => {
    if (protocol) {
    setName(protocol.user?.name|| "");
      setFunctionName(protocol.user?.function ||"");
      setContractType(String(protocol.user?.idContractType));
      setAccesses(protocol.user?.accesses|| []);
      const newArray =  protocol.user?.accesses?.map((access) => (access.id.toString()))
      setAcessoForm(newArray|| []);
    }
    
  }, [protocol]);


  const [name, setName] = useState<string>("");
  const [functionName, setFunctionName] = useState<string>("");
  const [contractType, setContractType] = useState<string>("");
  const [accesses, setAccesses] = useState<IAccess[]>([]);
  const [acessoForm, setAcessoForm] = useState<string[]>([]);

  const [modal, setModal] = useState<{modal: "editUser", user : IUser}>()



  function handleAcessoSelect(acesso: string) {
    if(acessoForm.includes(acesso)) return
    const newAcessoForm = [...acessoForm, acesso];
    setAcessoForm(newAcessoForm);
  }

  function handleAcessoDelete(acesso: string) {
    const newAcessoForm = acessoForm.filter((item) => item !== acesso);
    setAcessoForm(newAcessoForm);
  }

  function handleSubmit(e: SyntheticEvent){
    e.preventDefault()
    dispatch(resetLoading())

    const formUser: IUser = {
        id: protocol.user?.id,
        name, 
        function: functionName,
        idAccesses: acessoForm.map(Number),
        idContractType: Number(contractType)
    }

    setModal({modal: "editUser", user: formUser})
  }



  return (
    <form onSubmit={handleSubmit} className="flex flex-col self-center font-medium gap-2 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6">
     {modal?.modal === "editUser" && modal.user && <ModalEditUser user={modal.user} cancelModal={setModal} />}
        {errorUser && <CardError title={errorUser} />}
       <h2 className="text-[#848282] text-lg">
        Dados da solicitação para criação de usuario
      </h2>
      <div className="flex flex-wrap gap-2 md:gap-6 md:flex-nowrap">
        <LabelFormOperator
          label="Nome"
          value={name}
          setValue={setName}
          required
        />
      </div>
      <div className="flex flex-wrap gap-2 md:gap-6 md:flex-nowrap">
        <LabelFormOperator
          label="Função"
          value={functionName}
          setValue={setFunctionName}
          required
        />

        <LabelFormSelectOperator
          label="Forma de Contratação"
          value={contractType}
          setValue={setContractType}
          array={contractTypes}
          required
        />
      </div>
        
   
      {accesses && (
      <div className="flex flex-wrap gap-2 md:flex-nowrap flex-col">
 
          <label htmlFor="" className="flex flex-col">
            <LabelForm text="Acessos:" required />

            <select
              name="acessos"
              id="acessos"
              className="border border-[#808080] text-[#313131] rounded px-2 h-8    bg-white"
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

            <div className="border border-[#808080] text-[#313131] flex flex-wrap gap-2 rounded min-h-8 p-2">
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
    
     </div>
      )}

      <div className=" flex flex-col md:flex-row gap-6 justify-between mb-12">
        <div className="w-full"></div>
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
  );
}

type FormEditCreateUserProps = {
  protocol: IProtocol;
};
