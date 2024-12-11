
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import getCookie from "@/lib/hooks/useSession";
import { putChamado } from "@/lib/slices/chamado.slice";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ModalEdit({
  protocol,
  cancelModal,
}: ModalEditProps) {
  const dispatch = useAppDispatch();
  const session = getCookie('user-ti')
  const router = useRouter()
  const {loading, error} = useAppSelector((state)=> state.chamadoState)

useEffect(()=>{
  if(loading === 'succeeded') return router.push('/dashboard')
  if(loading === 'failed') return cancelModal()
  return 

},[loading])

  const handleEdit = () => {
    dispatch(putChamado({
      chamado: protocol,
      token: session?.user.token,
      role: session?.user.role,
    }));
  };


  return (
    <div className="flex justify-center items-center bg-black/50 backdrop-blur-sm fixed inset-0 block z-10">
      <div className="flex flex-col bg-white w-11/12 md:w-2/4 lg:w-1/3 xl:w-1/4 2xl:w-1/5 rounded gap-6 text-white">
        <div className="flex justify-center gap-4 px-6 py-3 bg-[#1E1E1EE5] rounded-t items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 57 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.07143 61.8122C4.07143 63.5081 4.71486 65.1345 5.86017 66.3337C7.00548 67.5329 8.55886 68.2066 10.1786 68.2066H46.8214C48.4411 68.2066 49.9945 67.5329 51.1398 66.3337C52.2851 65.1345 52.9286 63.5081 52.9286 61.8122V17.0517H4.07143V61.8122ZM38.6786 27.7089C38.6786 27.1436 38.893 26.6015 39.2748 26.2018C39.6566 25.802 40.1744 25.5775 40.7143 25.5775C41.2542 25.5775 41.772 25.802 42.1538 26.2018C42.5355 26.6015 42.75 27.1436 42.75 27.7089V57.5493C42.75 58.1146 42.5355 58.6567 42.1538 59.0565C41.772 59.4562 41.2542 59.6808 40.7143 59.6808C40.1744 59.6808 39.6566 59.4562 39.2748 59.0565C38.893 58.6567 38.6786 58.1146 38.6786 57.5493V27.7089ZM26.4643 27.7089C26.4643 27.1436 26.6788 26.6015 27.0605 26.2018C27.4423 25.802 27.9601 25.5775 28.5 25.5775C29.0399 25.5775 29.5577 25.802 29.9395 26.2018C30.3212 26.6015 30.5357 27.1436 30.5357 27.7089V57.5493C30.5357 58.1146 30.3212 58.6567 29.9395 59.0565C29.5577 59.4562 29.0399 59.6808 28.5 59.6808C27.9601 59.6808 27.4423 59.4562 27.0605 59.0565C26.6788 58.6567 26.4643 58.1146 26.4643 57.5493V27.7089ZM14.25 27.7089C14.25 27.1436 14.4645 26.6015 14.8462 26.2018C15.228 25.802 15.7458 25.5775 16.2857 25.5775C16.8256 25.5775 17.3434 25.802 17.7252 26.2018C18.107 26.6015 18.3214 27.1436 18.3214 27.7089V57.5493C18.3214 58.1146 18.107 58.6567 17.7252 59.0565C17.3434 59.4562 16.8256 59.6808 16.2857 59.6808C15.7458 59.6808 15.228 59.4562 14.8462 59.0565C14.4645 58.6567 14.25 58.1146 14.25 57.5493V27.7089ZM54.9643 4.26293H39.6964L38.5005 1.7718C38.2471 1.23922 37.8568 0.791223 37.3736 0.478213C36.8903 0.165203 36.3332 -0.000403373 35.765 2.33564e-05H21.2223C20.6553 -0.0022587 20.0992 0.162731 19.6177 0.476089C19.1361 0.789446 18.7486 1.2385 18.4996 1.7718L17.3036 4.26293H2.03571C1.49581 4.26293 0.978017 4.4875 0.596247 4.88722C0.214476 5.28695 0 5.82909 0 6.39439L0 10.6573C0 11.2226 0.214476 11.7647 0.596247 12.1645C0.978017 12.5642 1.49581 12.7888 2.03571 12.7888H54.9643C55.5042 12.7888 56.022 12.5642 56.4038 12.1645C56.7855 11.7647 57 11.2226 57 10.6573V6.39439C57 5.82909 56.7855 5.28695 56.4038 4.88722C56.022 4.4875 55.5042 4.26293 54.9643 4.26293Z"
              fill="white"
            />
          </svg>

          <h3 className={` text-xl `}>Confirmação de Edição</h3>
        </div>
        <div className="flex flex-col text-[#696969] gap-6 items-center mx-6 mb-6">
          <h4 className="w-full text-lg text-center text-black">
            Deseja editar o chamado{" "}
            <span className="font-bold">ID {protocol.id}</span>?
          </h4>
         
          <div className="flex gap-3 w-full">
            <button
              type="button"
              className={`bg-[#1E1E1EE5] shadow-2xl rounded-xl text-white text-lg  px-2 py-1 w-1/2 font-semibold`}
              onClick={() => handleEdit()}
            >
              Salvar
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

type ModalEditProps = {
  protocol: IProtocol;
  cancelModal: Function;
};
