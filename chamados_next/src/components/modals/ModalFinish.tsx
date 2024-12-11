import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import getCookie from "@/lib/hooks/useSession";
import { putChamado } from "@/lib/slices/chamado.slice";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ModalFinish({
  protocol,
  cancelModal,
}: ModalFinishProps) {

  const dispatch = useAppDispatch();
  const {loading} = useAppSelector((state) => state.chamadoState)
  const session = getCookie('user-ti')
  const router = useRouter()

  const [observation, setObservation] = useState<string>("")
  const [message, setMessage] = useState<string>("")



  useEffect(()=>{
    
    if(loading === 'succeeded') {
      router.push('/dashboard')
      cancelModal()
    }
    if(loading === 'failed') return cancelModal()

    return 
  },[loading])

  const handleUpProtocol = () => {
    const numUp = protocol.idOrigin === 3 ? 2 : 1 
    const protocolUpStatus: IProtocol = {
      ...protocol,
      idStatus: protocol.idStatus + numUp,
      observation,
    };
    dispatch(
      putChamado({
        chamado: protocolUpStatus,
        message,
        token: session?.user.token,
        role: session?.user.role,
      })
    );

  };


  return (
    <div className="flex justify-center items-center bg-black/50 backdrop-blur-sm fixed inset-0 block z-10">
      <div className="flex flex-col bg-white w-11/12 md:w-2/4 lg:w-1/3 xl:w-1/4 2xl:w-1/5 rounded gap-4 text-white">
        <div className="flex justify-center gap-4 px-6 py-3 bg-[#1E1E1EE5] rounded-t items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 135 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M135 67.5C135 104.779 104.779 135 67.5 135C30.2207 135 0 104.779 0 67.5C0 30.2207 30.2207 0 67.5 0C104.779 0 135 30.2207 135 67.5ZM59.6923 103.241L109.773 53.1601C111.474 51.4595 111.474 48.7021 109.773 47.0015L103.614 40.8429C101.914 39.1421 99.1564 39.1421 97.4556 40.8429L56.6129 81.6853L37.5444 62.6169C35.8439 60.9163 33.0864 60.9163 31.3856 62.6169L25.227 68.7754C23.5265 70.476 23.5265 73.2334 25.227 74.934L53.5335 103.24C55.2343 104.941 57.9915 104.941 59.6923 103.241Z"
              fill="#fff"
            />
          </svg>

          <h3 className={` text-xl `}>Finalizar Chamado</h3>
        </div>
        <div className="flex flex-col text-[#696969] gap-3 items-center mx-6 mb-6">
          <h4 className="w-full text-lg text-justify text-black">
            Deseja finalizar o chamado{" "}
            <span className="font-bold">ID {protocol.id}</span>?
          </h4>
          <label
            className="flex flex-col w-full text-black font-semibold"
            htmlFor=""
          >
            Observação:
            <textarea
              name=""
              id=""
              rows={3}
              className="border border-[#848282] rounded resize-none px-2"
              onChange={(e) => setObservation(e.target.value)}
              value={observation}
            ></textarea>
          </label>
          {protocol.email && (
            <>
              <div className="flex flex-col w-full">
                <p className="text-black font-semibold">Email:</p>
                <p>{protocol.email}</p>
              </div>
              <label
                className="flex flex-col w-full text-black font-semibold"
                htmlFor=""
              >
                Retorno:
                <textarea
                  name=""
                  id=""
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-[#848282] rounded resize-none px-2"
                ></textarea>
              </label>
            </>
          )}
          <div className="flex gap-3 w-full">
            <button
              type="button"
              className={`bg-[#1E1E1EE5] shadow-2xl rounded-xl text-white text-lg  px-2 py-1 w-1/2 font-semibold`}
              onClick={() => handleUpProtocol()}
           >
              Finalizar
            </button>
            <button
              type="button"
              className={`bg-white shadow-2xl rounded-xl text-black text-lg px-2 py-1 border border-black w-1/2 font-semibold`}
              onClick={() => cancelModal()}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type ModalFinishProps = {
  protocol: IProtocol;
  cancelModal: Function;
};
