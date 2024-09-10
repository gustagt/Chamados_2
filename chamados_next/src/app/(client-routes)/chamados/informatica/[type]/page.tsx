import CardFormulario from "@/components/cards/CardFormulario";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { type: number } }) {
  const type = Number(params.type);

  return (
    <div className="grid gap-2 grid-cols-2 m-4 h-[96vh]">
      <CardFormulario type={type} />
      <form className="flex flex-col items-center h-full gap-16">
        <div className="grid grid-cols-4 w-full text-center">
          <h2 className="col-start-2 col-span-2 text-3xl  pt-16">
            Dados do chamado
          </h2>
          <Link href="/login" className="justify-self-end">
            <Image
              src="/icons/logout.svg"
              alt="TransCon Logo"
              width={49}
              height={49}
              priority
            />
            <span>Sair</span>
          </Link>
        </div>
        {type !== 3 ? (
          <div className="flex flex-col gap-3 font-medium w-2/3">
            <label htmlFor="" className="flex flex-col ">
              Nome:
              <input
                className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
                type="text"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Setor:
              <select
                name="cars"
                id="cars"
                className="outline outline-1 outlineu-black rounded-sm px-2 h-8"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </label>
            {type === 5 && (
              <label htmlFor="" className="flex flex-col">
                Periférico:
                <select
                  name="cars"
                  id="cars"
                  className="outline outline-1 outlineu-black rounded-sm px-2 h-8"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </label>
            )}
            {type === 6 && (
              <label htmlFor="" className="flex flex-col">
                Sistema:
                <select
                  name="cars"
                  id="cars"
                  className="outline outline-1 outlineu-black rounded-sm px-2 h-8"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </label>
            )}
            <label htmlFor="" className="flex flex-col">
              Descrição do chamado:
              <select
                name="cars"
                id="cars"
                className="outline outline-1 outlineu-black rounded-sm px-2 h-8"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </label>
            <label htmlFor="" className="flex flex-col">
              Observação:
              <textarea
                className="outline outline-1 outlineu-black rounded-sm px-2"
                name=""
                id=""
                rows={4}
              ></textarea>
            </label>
            <label htmlFor="" className="flex flex-col">
              E-mail:
              <input
                className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
                type="text"
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
              Caso deseje receber o retorno do chamado preencher com algum
              e-mail válido.
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-3 font-medium w-2/3">
            <span className="flex text-sm font-normal text-red-500">
              <Image
                src="/icons/alert.svg"
                alt="exluir"
                width={16}
                height={12}
              />
              A criação de usuários deve ser realizada pelo responsável do
              setor!
            </span>
            <label htmlFor="" className="flex flex-col ">
              Nome:
              <input
                className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
                type="text"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              E-mail:
              <input
                className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
                type="text"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Setor:
              <select
                name="cars"
                id="cars"
                className="outline outline-1 outlineu-black rounded-sm px-2 h-8"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </label>{" "}
            <label htmlFor="" className="flex flex-col">
              Acessos:
              <select
                name="cars"
                id="cars"
                className="outline outline-1 outlineu-black rounded-sm px-2 h-8"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </label>
            <label htmlFor="" className="flex flex-col">
              Pastas Selecionadas::
              <div className="flex flex-wrap gap-2 outline outline-1 outlineu-black rounded-sm min-h-8 p-2">
                <div className="flex  justify-between gap-1 bg-[#E5E5E5] text-[#727272] px-1 rounded-r-full">
                  GEINF
                  <Image
                    src="/icons/x.svg"
                    alt="exluir"
                    width={12}
                    height={12}
                  />
                </div>
                <div className="flex  justify-between gap-1 bg-[#E5E5E5] text-[#727272] px-1 rounded-r-full">
                  Assessoria juridica
                  <Image
                    src="/icons/x.svg"
                    alt="exluir"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
            </label>
            <label htmlFor="" className="flex flex-col">
              Função:
              <input
                className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
                type="text"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Superior Imediato:
              <input
                className="outline outline-1 outlineu-black rounded-sm h-8 px-2"
                type="text"
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
              Caso deseje receber o retorno do chamado preencher com algum
              e-mail válido.
            </span>
          </div>
        )}
        <div className="flex w-2/3 justify-end">
          <div className=" w-1/3 min-w-24 ">botao</div>
        </div>
      </form>
    </div>
  );
}
