"use client";

import ButtonLogout from "@/components/buttons/ButtonLogout";
import IconCode from "@/components/Icons/IconCode";
import IconOutlet from "@/components/Icons/IconOutlet";
import IconPrinter from "@/components/Icons/IconPrinter";
import IconSearch from "@/components/Icons/IconSearch";
import IconSystem from "@/components/Icons/IconSystem";
import IconTell from "@/components/Icons/IconTell";
import IconThreeDot from "@/components/Icons/IconThreeDot";
import IconUser from "@/components/Icons/IconUser";
import IconUserAdd from "@/components/Icons/IconUserAdd";
import IconWorkStation from "@/components/Icons/IconWorkStation";
import IconLinkMenu from "@/components/links/IconLinkMenu";
import IconLinkNav from "@/components/links/IconLinkNav";

export default function Page() {
  return (
    <div className="grid gap-1 m-4 lg:h-[96vh]">
      <div className="bg-teclado bg-cover h-full rounded">
        <div className="bg-black-90 h-full flex flex-col gap-8 rounded text-white">
          <div className="flex justify-between text-center">
            <IconLinkNav
              
              pathLink="/chamados"
            />
            <ButtonLogout type="user" color="white" />
          </div>
          <div>
            <h2 className="text-4xl font-medium text-white text-center p-4">
              Selecione o tipo de chamado
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 auto-cols-auto sm:w-1/2 lg:w-2/3 2xl:w-1/2  sm:gap-10 justify-center self-center">
            <IconLinkMenu
              pathLink="/chamados/informatica/1"
              text="Computador"
              iconComponent={
                <IconWorkStation width={100} height={100} color="white" />
              }
            />
            <IconLinkMenu
              pathLink="/chamados/informatica/2"
              text="Sistema"
              iconComponent={
                <IconSystem width={100} height={100} color="white" />
              }
            />
            <IconLinkMenu
              pathLink="/chamados/informatica/3"
              text="Criação de usuario"
              iconComponent={
                <IconUserAdd width={100} height={100} color="white" />
              }
            />
            <IconLinkMenu
              pathLink="/chamados/informatica/8"
              text="Usuário"
              iconComponent={
                <IconUser width={100} height={100} color="white" />
              }
            />
            <IconLinkMenu
              pathLink="/chamados/informatica/4"
              text="Impressora"
              iconComponent={
                <IconPrinter width={100} height={100} color="white" />
              }
            />
            <IconLinkMenu
              pathLink="/chamados/informatica/5"
              text="Periféricos"
              iconComponent={
                <IconOutlet width={100} height={100} color="white" />
              }
            />
            <IconLinkMenu
              pathLink="/chamados/informatica/6"
              text="Sistemas Internos"
              iconComponent={
                <IconCode width={100} height={100} color="white" />
              }
            />
            <IconLinkMenu
              pathLink="/chamados/informatica/7"
              text="Telefone"
              iconComponent={
                <IconTell width={100} height={100} color="white" />
              }
            />
            <div className="hidden lg:block"></div>
            <IconLinkMenu
              pathLink="/chamados/informatica/consulta"
              text="Consultar Chamado"
              iconComponent={
                <IconSearch width={100} height={100} color="white" />
              }
            />
            <IconLinkMenu
              pathLink="/chamados/informatica/0"
              text="Outros"
              iconComponent={
                <IconThreeDot width={100} height={100} color="white" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
