import IconCode from "@/components/Icons/IconCode";
import IconSearch from "@/components/Icons/IconSearch";
import IconX from "@/components/Icons/IconX";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="bg-teclado bg-cover h-20">
        <nav className="flex bg-[#1e1e1eda] h-full items-center justify-between text-white px-12">
          <div className="flex gap-12">
            <label htmlFor="search" className="relative w-64">
              <div
                className="absolute top-1/2 transform -translate-y-1/2 right-2
                        flex items-center
                        pointer-events-none"
              >
                <IconSearch width={24} height={24} color="#747474" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="rounded-md font-md text-black text-lg w-full py-1 px-2 pr-8"
              />
            </label>
            <div className="flex gap-6  items-center text-[#D9D9D9] font-medium">
              <label htmlFor="" className="flex items-baseline text-lg gap-2">
                <input type="checkbox" name="" id="" />
                Aberto
              </label>
              <label htmlFor="" className="flex items-baseline text-lg gap-2">
                <input type="checkbox" name="" id="" />
                Em Atendimento
              </label>
              <label htmlFor="" className="flex items-baseline text-lg gap-2">
                <input type="checkbox" name="" id="" />
                ID
              </label>
     
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <h1 className="text-2xl">DASHBOARD</h1>
            <div className="flex flex-col items-center">
              <IconX width={36} height={36} color="white" />
              <span>Sair</span>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col w-11/12 content-center self-center mt-6">
        <table className="table-auto w-full text-center box-border ">
          <thead className="bg-[#313131] text-white h-10 ">
            <tr>
              <th className="rounded-tl-md">ID</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Status</th>
              <th>Setor</th>
              <th>Solicitante</th>
              <th>Origem</th>
              <th>Descrição</th>
              <th className="rounded-tr-md">Opções</th>
            </tr>
          </thead>

          <tbody className="font-semibold">
            <tr>
              <td className="min-h-2 flex text-start gap-6" colSpan={4}></td>
            </tr>
            <tr className="bg-[#F4F4F4] border border-[#CBCBCB] shadow-md h-10">
              <td>500</td>
              <td>03/06/2024</td>
              <td>14:00</td>
              <td>Aberto</td>
              <td>Gerência de Tecnologia da Informação</td>
              <td>Jullyana Melo</td>
              <td>Criação de Usuário</td>
              <td></td>
              <td>
                <div className="flex justify-center gap-2">
                  <Image
                    className="cursor-pointer"
                    src={"/icons/trash.png"}
                    width={20}
                    height={20}
                    alt="excluir"
                  />
                  <Image
                    className="cursor-pointer"
                    src={"/icons/checkGreen.png"}
                    width={20}
                    height={20}
                    alt="concluir"
                  />
                  <Image
                    className="rotate-90 cursor-pointer"
                    src={"/icons/arrow.png"}
                    width={20}
                    height={20}
                    alt="mais detalhes"
                  />
                  <Image
                    className="cursor-pointer"
                    src={"/icons/plus.png"}
                    width={20}
                    height={20}
                    alt="Subir processo"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={8} className="min-h-2 text-start">
                <div className="flex p-6 gap-12">
                  <div className="flex flex-col items-start ">
                    <span className="text-[#848282]">Observações:</span>
                    <span>Gerência de Tecnologia da Informação</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#848282]">Email:</span>

                    <span className="flex gap-2 ">
                      jullyanaglaucia@gmail.com
                      <Image
                        src={"/icons/mail.png"}
                        width={18}
                        height={18}
                        alt="Email"
                      />
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#848282]">Editar:</span>
                    <Image
                      className="cursor-pointer"
                      src={"/icons/pincel.png"}
                      width={18}
                      height={18}
                      alt="Editar"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[#848282]">Observações Interna:</span>
                    <span>Gerência de Tecnologia da Informação:</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="bg-[#F4F4F4] border border-[#CBCBCB] shadow-md h-10">
              <td>500</td>
              <td>03/06/2024</td>
              <td>14:00</td>
              <td>Aberto</td>

              <td>Gerência de Tecnologia da Informação</td>
              <td>Jullyana Melo</td>
              <td>Criação de Usuário</td>
              <td></td>
              <td>
                <div className="flex justify-center gap-2">
                  <Image
                    className="cursor-pointer"
                    src={"/icons/trash.png"}
                    width={20}
                    height={20}
                    alt="excluir"
                  />
                  <Image
                    className="cursor-pointer"
                    src={"/icons/checkGreen.png"}
                    width={20}
                    height={20}
                    alt="concluir"
                  />
                  <Image
                    className="rotate-90 cursor-pointer"
                    src={"/icons/arrow.png"}
                    width={20}
                    height={20}
                    alt="mais detalhes"
                  />
                  <Image
                    className="cursor-pointer"
                    src={"/icons/plus.png"}
                    width={20}
                    height={20}
                    alt="Subir processo"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="min-h-2 flex text-start gap-6" colSpan={4}></td>
            </tr>
            <tr className="bg-[#F4F4F4] border border-[#CBCBCB] shadow-md h-10">
              <td>500</td>
              <td>03/06/2024</td>
              <td>14:00</td>
              <td>Aberto</td>

              <td>Gerência de Tecnologia da Informação</td>
              <td>Jullyana Melo</td>
              <td>Criação de Usuário</td>
              <td></td>
              <td>
                <div className="flex justify-center gap-2">
                  <Image
                    className="cursor-pointer"
                    src={"/icons/trash.png"}
                    width={20}
                    height={20}
                    alt="excluir"
                  />
                  <Image
                    className="cursor-pointer"
                    src={"/icons/checkGreen.png"}
                    width={20}
                    height={20}
                    alt="concluir"
                  />
                  <Image
                    className="rotate-90 cursor-pointer"
                    src={"/icons/arrow.png"}
                    width={20}
                    height={20}
                    alt="mais detalhes"
                  />
                  <Image
                    className="cursor-pointer"
                    src={"/icons/plus.png"}
                    width={20}
                    height={20}
                    alt="Subir processo"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="min-h-2 flex text-start gap-6" colSpan={4}></td>
            </tr>
          </tbody>
        </table>
        <div className="flex bg-[#313131] text-white justify-end h-10 rounded-b-md gap-6 items-center px-12">
          <span> 1-10 de 468</span> <span>{"<"}</span> <span>{">"}</span>
        </div>
      </div>
    </div>
  );
}
