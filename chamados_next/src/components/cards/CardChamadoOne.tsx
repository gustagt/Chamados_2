
import Image from "next/image";
import  IconLinkNav  from "../links/IconLinkNav";
import ButtonLogout from "../buttons/ButtonLogout";


export default  function CardChamadoOne({ back, logout }: CardChamadoProps) {
 
  return (
    <div className="bg-teclado bg-cover h-full rounded">
      <div className="bg-black-90 h-full grid grid-rows-5 rounded text-white">
        
        {back && (
          <IconLinkNav pathLink="/login" pathIcon="/icons/back-w.svg"  altIcon="Voltar a pagina anterior"/>
        )}

        {logout && (
            <ButtonLogout />
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

type CardChamadoProps = {
    back?: boolean;
    logout?: boolean;
};