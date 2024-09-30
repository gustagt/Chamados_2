import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ModalPrimary({ pathIcon, altIcon }: ModalPrimaryProps) {
  const router = useRouter()
  const handleClick = () => {
    router.push("/chamados/informatica");
  };

  return (
    <div className="flex justify-center items-center bg-black/50 backdrop-blur-sm fixed inset-0">
      <div className="flex flex-col bg-white w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 2xl:w-1/5  rounded-2xl p-8 gap-14">
        <div className="flex justify-center gap-4">
          <Image
            className=""
            src={pathIcon}
            alt={altIcon}
            width={84}
            height={100}
            priority
          />
          <h3 className="text-[#259F00] text-4xl font-bold">Chamado Aberto</h3>
        </div>
        <div className="flex flex-col text-[#696969] gap-3">
          <h4 className="font-black text-xl">
            Protocolo n° <span className="text-[#259F00]">123</span>
          </h4>
          <p className="text-xl">
            Agora é só aguardar. Em breve um integrante de nossa equipe estará
            atendendo sua solicitação.
          </p>
          <p className="text-sm">
            Em caso de e-mail cadastrado você receberá o retorno via e-mail.
          </p>
        </div>
        <button
          type="button"
          className="bg-[#259F00] shadow-2xl rounded-3xl text-white text-xl font-bold p-2"
          onClick={handleClick}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

type ModalPrimaryProps = {
  pathIcon: string;
  altIcon: string;
};
