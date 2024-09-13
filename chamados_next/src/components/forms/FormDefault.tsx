import {useState } from "react";
import LabelForm from "../label/LabelForm";
import { Session } from "next-auth";
import Image from "next/image";
import ButtonSecundary from "../buttons/ButtonSecundary";


export default function FormDefault({
  type,
  session,
  setores,
  atendimentos,
  sistemas,
}: FormDefaultProps) {







  const [name, setName] = useState<string>(
    session?.user.name.substring(3) || ""
  );
  const [setor, setSetor] = useState<string>("");
  const [atendimento, setAtendimento] = useState<string>("");
  const [observacao, setObservacao] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sistema, setSistema] = useState<string>("");
  
  return (
    <div className="flex flex-col gap-3 font-medium w-2/4 md:w-1/3">
      <label htmlFor="" className="flex flex-col ">
        <LabelForm text="Nome:" required />
        <input
          className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label htmlFor="" className="flex flex-col">
        <LabelForm text="Setor:" required />

        <select
          name="setores"
          id="setores"
          className="outline outline-1 outlineu-black rounded-sm h-8 px-2 max-w-72  sm:max-w-none bg-white"
          value={setor}
          onChange={(e) => setSetor(e.target.value)}
          required
        >
          <option></option>
          {setores &&
            setores.map((setor: { idSetor: number; setor: string }) => (
              <option key={`setor-${setor.idSetor}`} value={setor.idSetor}>
                {setor.setor}
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

          {atendimentos &&
            atendimentos.map(
              (atendimento: { idAtendimento: number; atendimento: string }) => (
                <option
                  key={`atendimento-${atendimento.idAtendimento}`}
                  value={atendimento.idAtendimento}
                >
                  {atendimento.atendimento}
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
                  idSistema: number;
                  sistema: string;
                }) => (
                  <option
                    key={`sistemas-${sistemas.idSistema}`}
                    value={sistemas.idSistema}
                  >
                    {sistemas.sistema}
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
    </div>
  );
}

type FormDefaultProps = {
  type: number;
  session: Session | null;
  setores: [];
  atendimentos: [];
  sistemas?: [];
};
