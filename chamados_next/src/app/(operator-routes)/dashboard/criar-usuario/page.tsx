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
          <h1 className="text-4xl font-semibold self-center">
            Criação de Usuário - Chamado ID 555
          </h1>
          <div>
            <IconX color="white" width={48} height={48} />
            <span>Sair</span>
          </div>
        </nav>
      </div>
      <form
        action=""
        className="flex flex-col self-center font-medium gap-2 w-2/6"
      >
        <div className="flex gap-6 ">
          <div className="flex flex-col gap-2 w-full">
            <span>Nome:</span>
            <span>Jullyana Glaucia de Melo</span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span>Função:</span>
            <span>Supervisor Administrativo</span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-full">
            <span>E-mail:</span>
            <span>jullyanaglaucia@gmail.com</span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span>Superior Imediato:</span>
            <span>Renato Wender</span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 w-full">
            <span>Setor:</span>
            <span>Diretoria de Operações e Educação para o Trânsito</span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span>Forma de Contratação:</span>
            <span>Renato Wender</span>
          </div>
        </div>
    
        <div className="flex gap-6 justify-between">
            <span>Acesso:</span>
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
