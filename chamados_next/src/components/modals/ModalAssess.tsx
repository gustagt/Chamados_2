import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { postReview } from "@/lib/slices/chamado.slice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function ModalAssess({
  pathIcon,
  altIcon,
  handleStatusPage,
}: ModalAssessProps) {
  const items = [0, 1, 2, 3, 4];
  const { data: session } = useSession();
  const chamado = useAppSelector((state)=> state.chamadoState.chamado)

  const [star, setStar] = useState<number>(5);

  const [suggestion, setSuggestion] = useState<string>();

  const dispatch = useAppDispatch();

  const handleAssess = () => {
    if(chamado?.id && session){
      const review: IReview = {
        star,
        suggestion: suggestion,
        idProtocol: chamado.id,
      };
      dispatch(postReview({review,  token : session?.user.token}));
    }
    
    handleStatusPage(3);
  };


  return (
    <div className="flex justify-center items-center bg-black/50 backdrop-blur-sm fixed inset-0">
      <div className="flex flex-col bg-white  w-11/12 md:w-2/4 lg:w-1/3 xl:w-1/4 2xl:w-1/5  rounded-2xl p-8 gap-6 sm:gap-14">
        <div className="flex justify-center flex-wrap md:flex-nowrap gap-4">
          <Image
            className="drop-shadow-md"
            src={pathIcon}
            alt={altIcon}
            width={84}
            height={100}
            priority
          />
          <h3 className="text-[#FFAD00] text-4xl font-bold text-center ">
            AVALIE SUA EXPERIÊNCIA
          </h3>
        </div>

        <div className="flex items-center justify-center">
          {items.map((_, index) => (
            <svg
              key={index}
              className={`w-16 h-16  ms-1 hover:cursor-pointer ${
                star >= index + 1 ? "text-[#ffae00] ": "text-gray-300"
              }`}
              onClick={() => setStar(index + 1)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <label htmlFor="" className="flex flex-col text-[#727272]">
            Sugestões:
            <textarea
              className="border border-[#727272] rounded-lg resize-none h-32 p-2 focus:outline-[#FFAD00] "
              name=""
              id=""
              maxLength={300}
              onChange={(e) => setSuggestion(e.target.value)}
            ></textarea>
          </label>

          <button
            type="button"
            className="bg-[#FFAD00] shadow-2xl rounded-3xl text-white text-xl font-bold p-2 "
            onClick={handleAssess}
          >
            Avaliar
          </button>
        </div>
      </div>
    </div>
  );
}

type ModalAssessProps = {
  pathIcon: string;
  altIcon: string;
  handleStatusPage: Function;
};
