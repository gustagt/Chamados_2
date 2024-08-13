import Image from "next/image";
import Link from "next/link";

export function CardChamado({ side, ...props }: { side?: string }) {
  return (
    <div className="bg-teclado bg-cover h-full rounded">
      <div className="bg-black-90 h-full grid grid-rows-5 rounded text-white">
        {side === "right" && (
          <div className="self-start justify-self-end p-4 text-center">
            <Image
              src="/icons/logout-w.svg"
              alt="Informatica Icone"
              width={46}
              height={46}
            ></Image>
            <span>Sair</span>
          </div>
        )}
        {side === "left" && (
          <div className="self-start p-4 text-center">
            <Image
              src="/icons/back-w.svg"
              alt="Informatica Icone"
              width={42}
              height={42}
            ></Image>
            <span>Voltar</span>
          </div>
        )}

        <div className="flex flex-wrap basis-3/4 row-start-3 justify-self-center items-center ">
          <Image
            src="/images/logoTranscon.png"
            alt="TransCon Logo"
            width={95}
            height={95}
            priority
          />
          <h1 className="text-6xl font-medium ">CHAMADOS</h1>
        </div>
      </div>
    </div>
  );
}

export function CardFormulario({ type, ...props }: CardProps) {
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
      icon = "user";
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
  }

  return (
    <div className="bg-teclado bg-cover h-full rounded">
      <div className="bg-black-90 h-full flex flex-col items-center rounded text-white gap-24">
        <div className="grid grid-cols-4 w-full text-center">
          <Link href="/login" className="justify-self-start p-2">
            <Image
              className="p-1"
              src="/icons/back-w.svg"
              alt="TransCon Logo"
              width={42}
              height={42}
              priority
            />
            <span>Voltar</span>
          </Link>
          <h2 className="col-start-2 col-span-2 text-3xl  pt-16">
            Dados do chamado
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            className="min-h-44"
            src={`/icons/${icon}.svg`}
            alt="TransCon Logo"
            width={196}
            height={196}
            priority
          />
          <h3 className="text-2xl text-white text-center">{text}</h3>
        </div>
        {type === 0 && (
          <div>
            <span>
              Caso não tenha encontrado um tipo específico detalhe sua
              solicitação em observação.
            </span>
          </div>
        )}
        {type === 1 && (
          <div>
            <span> Problemas físicos relacionado ao computador, como:</span>
            <ul className="list-disc list-inside p-3">
              <li>Computador não liga;</li>
              <li>Tela com mal funcionamento/não funciona;</li>
              <li>Tela azul;</li>
            </ul>
          </div>
        )}
        {type === 2 && (
          <div>
            <span>Problemas relacionados aos Sistemas, como: </span>
            <ul className="list-disc list-inside p-3">
              <li>Instalação de Software;</li>
              <li>Software não abre;</li>
              <li>Suporte para uso de software;</li>
              <li>Etc;</li>
            </ul>
          </div>
        )}
        {type === 3 && (
          <div>
            <ul className="list-disc list-inside p-3">
              <li>Chamado destinado a pessoas que não possuem login;</li>
              <li>Deverá ser solicitado pelo responsável do setor!</li>
            </ul>
          </div>
        )}
        {type === 4 && (
          <div>
            <span>Problemas relacionado a Impressora, como:</span>
            <ul className="list-disc list-inside p-3">
              <li>Impressora com tonner baixo;</li>
              <li>Tela travada;</li>
              <li>Atolamento de papel;</li>
              <li>Etc;</li>
            </ul>
          </div>
        )}
        {type === 5 && (
          <div>
            <span>Problemas relacionados aos Periféricos, como: </span>
            <ul className="list-disc list-inside p-3">
              <li>Troca de Mouse/Teclado ;</li>
              <li>Fornecimento de Mousepad;</li>
              <li>Fornecimento de WebCam;</li>
              <li> Etc;</li>
            </ul>
          </div>
        )}
        {type === 6 && (
          <div>
            <span>Problemas relacionados a Sistema Internos, como: </span>
            <ul className="list-disc list-inside p-3">
              <li>Sistema de Credenciais;</li>
              <li>SITT;</li>
              <li>Biblio</li>
              <li>Chamados;</li>
              <li>Etc;</li>
            </ul>
          </div>
        )}
        {type === 7 && (
          <div>
            <span> Problemas físicos relacionado ao Telefone, como:</span>
            <ul className="list-disc list-inside p-3">
              <li> Telefone não efetua chamada;</li>
              <li> Telefone sem rede;</li>
              <li> Mudança de nome do ramal;</li>
              <li> Etc;</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

type CardProps = {
  type: number;
};
