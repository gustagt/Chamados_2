import { useAppSelector } from "@/lib/hooks/redux";
import { useRouter } from "next/navigation";

export default function ModalPrimary({
  icon,
  className,
  classNameButton,
  text,
}: ModalPrimaryProps) {
  const { chamado: protocol } = useAppSelector((state) => state.chamadoState);

  const router = useRouter();
  const handleClick = () => {
    router.push("/chamados/informatica");
  };

  return (
    <div className="flex justify-center items-center bg-black/50 backdrop-blur-sm fixed inset-0">
      <div className="flex flex-col bg-white w-11/12 md:w-2/4 lg:w-1/3 xl:w-1/4 2xl:w-1/5  rounded-2xl p-8 gap-12">
        <div className="flex justify-center gap-4 ">
          {icon === "checkGreeen" && (
            <svg
              width="85"
              height="85"
              viewBox="0 0 135 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M135 67.5C135 104.779 104.779 135 67.5 135C30.2207 135 0 104.779 0 67.5C0 30.2207 30.2207 0 67.5 0C104.779 0 135 30.2207 135 67.5ZM59.6923 103.241L109.773 53.1601C111.474 51.4595 111.474 48.7021 109.773 47.0015L103.614 40.8429C101.914 39.1421 99.1564 39.1421 97.4556 40.8429L56.6129 81.6853L37.5444 62.6169C35.8439 60.9163 33.0864 60.9163 31.3856 62.6169L25.227 68.7754C23.5265 70.476 23.5265 73.2334 25.227 74.934L53.5335 103.24C55.2343 104.941 57.9915 104.941 59.6923 103.241Z"
                fill="#259F00"
              />
            </svg>
          )}
          {icon === "outlet" && (
            <svg
              width="85"
              height="100"
              viewBox="0 0 135 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112.5 11.25C112.5 8.26631 111.315 5.40483 109.205 3.29505C107.095 1.18526 104.234 0 101.25 0C98.2663 0 95.4048 1.18526 93.2951 3.29505C91.1853 5.40483 90 8.26631 90 11.25V45H112.5V11.25ZM129.375 56.25H5.625C4.13316 56.25 2.70242 56.8426 1.64752 57.8975C0.592632 58.9524 0 60.3832 0 61.875L0 73.125C0 74.6168 0.592632 76.0476 1.64752 77.1025C2.70242 78.1574 4.13316 78.75 5.625 78.75H11.25V90C11.252 102.966 15.7314 115.534 23.9309 125.578C32.1303 135.622 43.5468 142.527 56.25 145.125V180H78.75V145.125C91.4532 142.527 102.87 135.622 111.069 125.578C119.269 115.534 123.748 102.966 123.75 90V78.75H129.375C130.867 78.75 132.298 78.1574 133.352 77.1025C134.407 76.0476 135 74.6168 135 73.125V61.875C135 60.3832 134.407 58.9524 133.352 57.8975C132.298 56.8426 130.867 56.25 129.375 56.25ZM45 11.25C45 8.26631 43.8147 5.40483 41.705 3.29505C39.5952 1.18526 36.7337 0 33.75 0C30.7663 0 27.9048 1.18526 25.795 3.29505C23.6853 5.40483 22.5 8.26631 22.5 11.25V45H45V11.25Z"
                fill="#3B4A75"
              />
            </svg>
          )}

          <h3 className={`${className} text-4xl font-bold`}>Chamado Aberto</h3>
        </div>
        <div className="flex flex-col text-[#696969] gap-3">
          <h4 className="font-black text-xl">
            Protocolo n° <span className={`${className}`}>{protocol?.id}</span>
          </h4>
          <p className="text-xl">{text}</p>
          <p className="text-sm">
            Em caso de e-mail cadastrado você receberá o retorno via e-mail.
          </p>
        </div>
        <button
          type="button"
          className={`shadow-2xl rounded-3xl text-white text-xl font-bold p-2 ${classNameButton}`}
          onClick={handleClick}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

type ModalPrimaryProps = {
  icon: "checkGreeen" | "outlet";
  className: string;
  classNameButton: string;
  text: string;
};
