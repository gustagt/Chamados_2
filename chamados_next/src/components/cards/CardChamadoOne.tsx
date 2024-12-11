import Image from "next/image";
import IconLinkNav from "../links/IconLinkNav";
import ButtonLogout from "../buttons/ButtonLogout";


export default function CardChamadoOne({ back, logout, ti }: CardChamadoProps) {
  return (
    <div className="bg-teclado bg-cover h-full rounded">
      <div className="bg-black-90 h-full grid grid-rows-3 md:grid-rows-5 rounded text-white">
        {back && (
          <IconLinkNav
          
          pathLink="/chamados/informatica"
        />
        )}

        {logout && <ButtonLogout type="user" color="white"/>}

        <div className="flex flex-wrap w-3/4 lg:flex-nowrap  row-start-2 md:row-start-3 justify-self-center  justify-center md:justify-center items-center gap-2">
          <Image
          
            src="/images/logoTranscon.png"
            alt="TransCon Logo"
            width={95}
            height={95}
            priority
          />
          <h1 className="text-4xl sm md:text-5xl font-medium ">{ti? "CHAMADOS-TI":"CHAMADOS"}</h1>
        </div>
      </div>
    </div>
  );
}

type CardChamadoProps = {
  back?: boolean;
  logout?: boolean;
  ti?: boolean
};
