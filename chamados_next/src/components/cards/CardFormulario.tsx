import Image from "next/image";
import IconLinkNav from "../links/IconLinkNav";
import ButtonLogout from "../buttons/ButtonLogout";

export default function CardFormulario({ type }: CardProps) {
  let text;
  let icon;

  switch (type) {
    case 0:
      text = "Outros";
      icon = "outros";
      break;
    case 1:
      text = "Computador";
      icon = "Workstation-white";
      break;
    case 2:
      text = "Sistema";
      icon = "sistem";
      break;
    case 3:
      text = "Criação de Usuário";
      icon = "create-user";
      break;
    case 4:
      text = "Impressora";
      icon = "Print";
      break;
    case 5:
      text = "Periférico";
      icon = "Electrical";
      break;
    case 6:
      text = "Sistemas Internos";
      icon = "SourceCode";
      break;
    case 7:
      text = "Telefone";
      icon = "Phone";
      break;
    case 8:
      text = "Usuario";
      icon = "user";
      break;
  }

  return (
    <div className="bg-teclado bg-cover h-fit md:h-full  rounded">
      <div className="bg-black-90  h-full flex flex-col items-center rounded text-white gap-24 pb-16 md:pb-0">
        <div className="grid grid-cols-4 w-full text-center ">
          <IconLinkNav
            pathIcon="/icons/back-w.svg"
            altIcon="Voltar"
            pathLink="/chamados/informatica"
          />
          <h2 className="col-start-2 col-span-2 text-3xl  pt-16">
            Dados do chamado
          </h2>
          <ButtonLogout
            pathIcon="/icons/logout-w.svg"
            className="block md:hidden"
          />
        </div>
        <div className="flex flex-col gap-6">
          <Image
            className="self-center w-full sm:w-48"
            src={`/icons/${icon}.svg`}
            alt="Logo Chamado"
            width={196}
            height={196}
            priority
          />
          <h3 className="text-2xl text-white text-center">{text}</h3>
        </div>
        <div className="px-8 text-justify">
          {type === 0 && (
            <>
              <span>
                Caso não tenha encontrado um tipo específico detalhe sua
                solicitação em observação.
              </span>
            </>
          )}
          {type === 1 && (
            <>
              <span> Problemas físicos relacionado ao computador, como:</span>
              <ul className="list-disc list-inside p-3">
                <li>Computador não liga;</li>
                <li>Tela com mal funcionamento/não funciona;</li>
                <li>Tela azul;</li>
              </ul>
            </>
          )}
          {type === 2 && (
            <>
              <span>Problemas relacionados aos Sistemas, como: </span>
              <ul className="list-disc list-inside p-3">
                <li>Instalação de Software;</li>
                <li>Software não abre;</li>
                <li>Suporte para uso de software;</li>
                <li>Etc;</li>
              </ul>
            </>
          )}
          {type === 3 && (
            <>
              <ul className="list-disc list-inside p-3">
                <li>Chamado destinado a pessoas que não possuem login;</li>
                <li>Deverá ser solicitado pelo responsável do setor!</li>
              </ul>
            </>
          )}
          {type === 4 && (
            <>
              <span>Problemas relacionado a Impressora, como:</span>
              <ul className="list-disc list-inside p-3">
                <li>Impressora com tonner baixo;</li>
                <li>Tela travada;</li>
                <li>Atolamento de papel;</li>
                <li>Etc;</li>
              </ul>
            </>
          )}
          {type === 5 && (
            <>
              <span>Problemas relacionados aos Periféricos, como: </span>
              <ul className="list-disc list-inside p-3">
                <li>Troca de Mouse/Teclado ;</li>
                <li>Fornecimento de Mousepad;</li>
                <li>Fornecimento de WebCam;</li>
                <li> Etc;</li>
              </ul>
            </>
          )}
          {type === 6 && (
            <>
              <span>Problemas relacionados a Sistema Internos, como: </span>
              <ul className="list-disc list-inside p-3">
                <li>Sistema de Credenciais;</li>
                <li>SITT;</li>
                <li>Biblio</li>
                <li>Chamados;</li>
                <li>Etc;</li>
              </ul>
            </>
          )}
          {type === 7 && (
            <>
              <span> Problemas físicos relacionado ao Telefone, como:</span>
              <ul className="list-disc list-inside p-3">
                <li> Telefone não efetua chamada;</li>
                <li> Telefone sem rede;</li>
                <li> Mudança de nome do ramal;</li>
                <li> Etc;</li>
              </ul>
            </>
          )}
          {type === 8 && (
            <>
              <span>Problemas relacionados ao Usuário, como:</span>
              <ul className="list-disc list-inside p-3">
                <li> Troca de Senha;</li>
                <li> Esquecimento de Pin;</li>
                <li> Acesso de pastas na rede;</li>
                <li> Etc;</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

type CardProps = {
  type: number;
};
