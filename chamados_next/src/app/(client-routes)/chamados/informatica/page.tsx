"use client";

import ButtonLogout from "@/components/buttons/ButtonLogout";
import IconLinkMenu from "@/components/links/IconLinkMenu";
import IconLinkNav from "@/components/links/IconLinkNav";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid gap-1 m-4 h-[96vh]">
      <div className="bg-teclado bg-cover h-full rounded">
        <div className="bg-black-90 h-full flex flex-col gap-8 rounded text-white">
          <div className="flex justify-between text-center">
            <IconLinkNav pathIcon="/icons/back-w.svg" altIcon="Voltar" pathLink="/chamados"/>
            <ButtonLogout />
          </div>
          <div>
            <h2 className="text-4xl font-medium text-white text-center p-4">
              Selecione o tipo de chamado
            </h2>
          </div>
          <div className="grid grid-cols-3 auto-cols-auto w-1/2 gap-10 justify-center self-center">
            <IconLinkMenu pathLink="/chamados/informatica/1" pathIcon="/icons/Workstation-white.svg" altIcon="chamado relacionado a computador" text="Computador"/>
            <IconLinkMenu pathLink="/chamados/informatica/2" pathIcon="/icons/sistem.svg" altIcon="chamado relacionado a sistema" text="Sistema"/>
            <IconLinkMenu pathLink="/chamados/informatica/3" pathIcon="/icons/create-user.svg" altIcon="chamado para criar usuario" text="Criação de usuario"/>
            <IconLinkMenu pathLink="/chamados/informatica/4" pathIcon="/icons/Print.svg" altIcon="chamado relacionado a impressora" text="Impressora"/>
            <IconLinkMenu pathLink="/chamados/informatica/5" pathIcon="/icons/Electrical.svg" altIcon="chamado relacionado a perifericos" text="Periféricos"/>
            <IconLinkMenu pathLink="/chamados/informatica/6" pathIcon="/icons/SourceCode.svg" altIcon="chamado relacionado aos sistemas internos" text="Sistemas Internos"/>
            <IconLinkMenu pathLink="/chamados/informatica/7" pathIcon="/icons/Phone.svg" altIcon="chamado relacionado a telefone" text="Telefone"/>
            <IconLinkMenu pathLink="/chamados/informatica/8" pathIcon="/icons/user.svg" altIcon="chamado relacionado ao usuario" text="Usuário"/>
            <IconLinkMenu pathLink="/chamados/informatica/0" pathIcon="/icons/outros.svg" altIcon="chamado relacionado a outras ocasiões" text="Outros"/>
          </div>
        </div>
      </div>
    </div>
  );
}
