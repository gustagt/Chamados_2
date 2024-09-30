import Image from "next/image";

export default function ModalSecondary({
  pathIcon,
  altIcon,
  handleStatusPage,
}: ModalSecondaryProps) {
  
  return (
    <div className="flex justify-center items-center bg-black/50 backdrop-blur-sm fixed inset-0">
      <div className="flex flex-col bg-white w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 2xl:w-1/5  rounded-2xl p-8 gap-14">
        <div className="flex justify-center gap-4">
          <Image
            className=""
            src={pathIcon}
            alt={altIcon}
            width={84}
            height={84}
            priority
          />
          <div>
            <h3 className="text-black text-4xl font-bold">ATENÇÃO</h3>
            <span className="text-sm w-full text-[#000000d1]">
              Seguir as orientações abaixo antes de finalizar o chamado.
            </span>
          </div>
        </div>
        <ul className="list-disc pl-5 text-[#696969]">
          <li className="box-border">Verificar se todos os cabos estão conectados na tomada;</li>
          <li>
            Retirar os equipamentos da tomada, aguardar 2 minutos e ligar
            novamente;
          </li>
        </ul>
        <div className="flex justify-between gap-2">
          <button
            type="button"
            className="bg-[#BDBCBC] shadow-2xl rounded-3xl text-white text-lg font-bold w-full p-2"
            onClick={()=> handleStatusPage(2)}
          >
            Resolvido
          </button>
          <button
            type="button"
            className="bg-[#AD4545] shadow-2xl rounded-3xl text-white text-lg w-full font-bold p-2"
            onClick={()=> handleStatusPage(2)}
          >
            Não resolvido
          </button>
        </div>
      </div>
    </div>
  );
}

type ModalSecondaryProps = {
  pathIcon: string;
  altIcon: string;
  handleStatusPage: Function;
};
