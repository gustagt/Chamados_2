"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid gap-1 m-4 h-[96vh]">
      <div className="bg-teclado bg-cover h-full rounded">
        <div className="bg-black-90 h-full flex flex-col gap-8 rounded text-white">
          <div className="flex justify-between text-center">
            <Link href="/login" className=" px-4 pt-4">
              <Image
              className="p-1"
                src="/icons/back-w.svg"
                alt="TransCon Logo"
                width={42}
                height={42}
                priority
              />
              <span>Voltar</span>
            </Link>
            <Link href="/login" className="px-4 pt-4">
              <Image
                src="/icons/logout-w.svg"
                alt="TransCon Logo"
                width={46}
                height={46}
                priority
              />
              <span>Sair</span>
            </Link>
          </div>
          <div>
            <h2 className="text-4xl font-medium text-white text-center p-4">
              Selecione o tipo de chamado
            </h2>
          </div>
          <div className="grid grid-cols-3 auto-cols-auto w-1/2 gap-10 justify-center self-center">
            <div className="flex justify-center content-center ">
              <Link href="/login" className="p-3 flex flex-col gap-3">
                <Image
                  src="/icons/Workstation-white.svg"
                  alt="TransCon Logo"
                  width={100}
                  height={100}
                  priority
                />
                <span className="flex justify-center text-white text-center">
                  Computador
                </span>
              </Link>
            </div>
            <div className="flex justify-center content-center">
              <Link href="/login" className="p-3 flex flex-col justify-between ">
              <div className="flex justify-center content-center h-[100px]">
                <Image
                  src="/icons/sistem.svg"
                  alt="TransCon Logo"
                  width={100}
                  height={100}
                  priority
                  />
                </div>
                <span className="flex justify-center text-white text-center">
                Sistema
                </span>
              </Link>
            </div>
            <div className="flex justify-center content-center">
              <Link href="/login" className="p-3 flex flex-col justify-between">
              <div className="flex justify-center content-center h-[100px]">
                  <Image
                    src="/icons/user.svg"
                    alt="TransCon Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <span className="flex justify-center text-white text-center">
                Criação de Usuário
                </span>
              </Link>
            </div>
            <div className="flex justify-center content-center">
              <Link href="/login" className="p-3 flex flex-col justify-between gap-3">
              <div className="flex justify-center content-center h-[100px]">
                  <Image
                    src="/icons/Print.svg"
                    alt="TransCon Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <span className="flex justify-center text-white text-center">
                Impressora
                </span>
              </Link>
            </div>
            <div className="flex justify-center content-center">
              <Link href="/login" className="p-3 flex flex-col justify-between">
              <div className="flex justify-center content-center h-[100px]">
                  <Image
                    src="/icons/Electrical.svg"
                    alt="TransCon Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <span className="flex justify-center text-white text-center">
                Periféricos
                </span>
              </Link>
            </div>
            <div className="flex justify-center content-center">
              <Link href="/login" className="p-3 flex flex-col justify-between">
              <div className="flex justify-center content-center h-[100px]">
                  <Image
                    src="/icons/SourceCode.svg"
                    alt="TransCon Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <span className="flex justify-center text-white text-center">
                Sistemas Internos
                </span>
              </Link>
            </div>
            <div className="flex justify-center content-center">
              <Link href="/login" className="p-3 flex flex-col justify-between gap-3">
              <div className="flex justify-center content-center h-[100px]">
                  <Image
                    src="/icons/Phone.svg"
                    alt="TransCon Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <span className="flex justify-center text-white text-center">
                Telefone
                </span>
              </Link>
            </div>
            <div className="flex justify-center content-center">
              <Link href="/login" className="p-3 flex flex-col justify-between">
              <div className="flex justify-center content-center h-[100px]">
                  <Image
                    src="/icons/outros.svg"
                    alt="TransCon Logo"
                    width={100}
                    height={100}
                    priority
                  />
                </div>
                <span className="flex justify-center text-white text-center">
                Outros
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
