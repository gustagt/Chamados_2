import IconX from "@/components/Icons/IconX";
import IconLinkNav from "@/components/links/IconLinkNav";

export default function Page() {
  return (
    <div className="flex flex-col gap-20">
      <div className="bg-teclado bg-cover h-40">
        <nav className="flex justify-between bg-[#1e1e1eda] h-full text-white">
          <IconLinkNav
            pathIcon="/icons/back-w.svg"
            altIcon="Voltar"
            pathLink="/chamados"
          />
          <h1 className="text-4xl font-semibold self-center">Editar Chamado ID 499</h1>
          <div>
            <IconX color="white" width={48} height={48} />
            <span>Sair</span>
          </div>
        </nav>
      </div>
      <form action="" className="flex flex-col self-center font-medium gap-2 w-3/6">
        <div className="flex gap-6 ">
            <label htmlFor="" className="flex flex-col gap-2 w-full">
              Solicitante
              <input type="text" className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded "  />
            </label>
            <label htmlFor="" className="flex flex-col gap-2 w-full">
              Origem
              <input type="text" className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded " />
            </label>
        </div>
        <div className="flex gap-6">
            <label htmlFor="" className="flex flex-col gap-2 w-full">
              Setor
              <input type="text" className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded " />
            </label>
            <label htmlFor="" className="flex flex-col gap-2 w-full">
              Descrição
              <input type="text" className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded " />
            </label>
        </div>
        <label htmlFor="" className="flex flex-col gap-2 w-full">
          Observação
          <input type="text" className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded " />
        </label>
        <label htmlFor="" className="flex flex-col gap-2 w-full">
        Observação Interna
          <input type="text" className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded " />
        </label>
        <label htmlFor="" className="flex flex-col gap-2 w-full">
          E-mail
          <input type="email" className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded " />
        </label>
        <div className="flex gap-6 justify-between">
            <label htmlFor=""className="flex flex-col gap-2 w-full">
              Status
              <input type="text" className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded " />
            </label>
            <div className="flex self-end w-full justify-between gap-2">
                <button className="border border-[#313131] rounded w-full py-1">Cancelar</button>
                <button className="border bg-[#313131] rounded text-white w-full py-1">Salvar</button>
            </div>
        </div>
      </form>
    </div>
  );
}
