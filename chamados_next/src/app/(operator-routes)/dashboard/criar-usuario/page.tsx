import ButtonLogout from "@/components/buttons/ButtonLogout";
import IconX from "@/components/Icons/IconX";
import IconLinkNav from "@/components/links/IconLinkNav";
import LabelCreateUser from "./../../../../components/label/LabelCreateUser";

export default function Page() {
  return (
    <div className="flex flex-col gap-20">
    
        
        <div className="bg-teclado bg-cover h-fit md:h-40">
        <nav className="hidden md:flex justify-between bg-[#1e1e1eda] h-full text-white ">
          <IconLinkNav pathLink="/dashboard" />
          <h1 className="text-2xl md:text-4xl text-center font-semibold self-center ">
          Criação de Usuário - Chamado ID 555
          </h1>
          <ButtonLogout path="/login-ti" />
        </nav>
        <nav className="flex flex-col md:hidden justify-between bg-[#1e1e1eda] h-full text-white ">
          <div className="flex justify-between">
            <IconLinkNav pathLink="/dashboard" />
            <ButtonLogout path="/login-ti" />
          </div>
          <h1 className="text-2xl text-center font-semibold self-center w-4/6  pb-4">
          Criação de Usuário - Chamado ID 555
          </h1>
         
        </nav>

      </div>
      <form
        action=""
        className="flex flex-col self-center font-medium gap-4 w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 " 
      >
        <div className="flex gap-6 ">
          <LabelCreateUser label="Nome" text="Jullyana Glaucia de Melo" />
          <LabelCreateUser label="Função" text="Supervisor Administrativo" />
        </div>
        <div className="flex gap-6">
          <LabelCreateUser
            label="Setor"
            text="Diretoria de Operações e Educação para o Trânsito"
          />
          <LabelCreateUser label="Forma de Contratação" text="Renato Wender" />
        </div>
        <div className="flex gap-6">
          <LabelCreateUser label="Superior Imediato" text="Renato Wender" />
          <LabelCreateUser
            label="E-mail do Superior"
            text="emaildosuperior@transcon.contagem.mg.gov"
          />
        </div>

        <div className="flex gap-6 justify-between">
          <span className="text-[#848282]">Acesso:</span>
          <span></span>
        </div>
        <div className="flex self-end w-2/4 justify-between gap-2 ">
          <button className="border border-[#313131] rounded w-full py-1">
            Editar
          </button>
          <button className="border bg-[#313131] rounded text-white w-full py-1">
            Finalizar
          </button>
        </div>
      </form>
    </div>
  );
}
