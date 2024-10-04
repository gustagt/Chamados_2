
import { useAppDispatch } from '@/lib/hooks/redux';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Workflow from './../utils/Workflow';
import { reset } from '@/lib/slices/chamado.slice';
export default function ModalConsult({ chamado } : ModalConsulProps) {

    const dispatch = useAppDispatch()
    const handleClick = () =>{
        dispatch(reset())
    }
  return (
    <div className="flex justify-center items-center bg-black/50 backdrop-blur-sm fixed inset-0">
      <div className="flex flex-col bg-white w-11/12 md:w-2/4  xl:w-2/4 2xl:w-2/5  rounded-md p-16 gap-14">
        <h2 className="text-3xl font-medium text-[#0B612C] text-center">
          Chamado <span className="font-bold">ID {chamado.id}</span>
        </h2>
          <Workflow chamado={chamado} />
          <div className='w-1/2 sm:w-1/4 self-end'onClick={handleClick}>
              <ButtonPrimary text='Fechar'/>
          </div>
      </div>
    </div>
  );
}

type ModalConsulProps = {
  chamado: IProtocol;
};
