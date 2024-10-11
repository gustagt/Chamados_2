import ButtonLogout from "@/components/buttons/ButtonLogout";
import IconX from "@/components/Icons/IconX";
import LabelFormOperator from "@/components/label/LabelFormOperator";
import LabelFormTextAreaOperator from "@/components/label/LabelFormTextAreaOperator";
import IconLinkNav from "@/components/links/IconLinkNav";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <div className="bg-teclado bg-cover h-fit md:h-40">
        <nav className="hidden md:flex justify-between bg-[#1e1e1eda] h-full text-white ">
          <IconLinkNav pathLink="/dashboard" />
          <h1 className="text-2xl md:text-4xl text-center font-semibold self-center ">
            Editar Chamado ID 499
          </h1>
          <ButtonLogout path="/login-ti" />
        </nav>
        <nav className="flex flex-col md:hidden justify-between bg-[#1e1e1eda] h-full text-white ">
          <div className="flex justify-between">
            <IconLinkNav pathLink="/dashboard" />
            <ButtonLogout path="/login-ti" />
          </div>
          <h1 className="text-2xl text-center font-semibold self-center  pb-4">
            Editar Chamado ID 499
          </h1>
         
        </nav>
      </div>
      <form
        action=""
        className="flex flex-col self-center font-medium gap-2 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6"
      >
        <div className="flex flex-wrap gap-2 md:gap-6 md:flex-nowrap">
          <LabelFormOperator label="Solicitante" />
          <LabelFormOperator label="Origem" />
        </div>
        <div className="flex flex-wrap gap-2 md:gap-6 md:flex-nowrap">
          <LabelFormOperator label="Setor" />
          <LabelFormOperator label="Descrição" />
        </div>
        <LabelFormTextAreaOperator label="Observação" />
        <LabelFormTextAreaOperator label="Observação Interna" />
        <LabelFormOperator label="E-mail" type="email" />

        <div className="flex flex-col md:flex-row gap-6 justify-between mb-12">
          <LabelFormOperator label="Status" />
          <div className="flex self-end w-full justify-between gap-2">
            <button className="border border-[#313131] rounded w-full py-1">
              Cancelar
            </button>
            <button className="border bg-[#313131] rounded text-white w-full py-1">
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
