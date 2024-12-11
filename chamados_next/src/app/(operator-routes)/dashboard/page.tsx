"use client";
import ButtonLogout from "@/components/buttons/ButtonLogout";
import IconArrowPage from "@/components/Icons/IconArrowPage";

import IconSearch from "@/components/Icons/IconSearch";
import IconTwoArrowPage from "@/components/Icons/IconTwoArrowPage";
import ModalFinish from "@/components/modals/ModalFinish";
import ModalDelete from "@/components/modals/ModalDelete";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import {

  getChamados,
  putChamado,
  resetLoading,
} from "@/lib/slices/chamado.slice";


import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import CardError from "@/components/cards/CardError";
import getCookie from "@/lib/hooks/useSession";

export default function Page() {
  const initialized = useRef(false);

  const session = getCookie('user-ti')

  useEffect(() => {
    if (!initialized.current && session?.user.token) {
      dispatch(getChamados(session.user.token));
      initialized.current = true;
    }
  });


  const dispatch = useAppDispatch();

  const { chamados: protocols, error: errorProtocol} = useAppSelector((state) => state.chamadoState);

  const [search, setSearch] = useState<string>("");
  const [protocolRender, setProtocolRender] = useState<IProtocol[]>([]);
  const [protocolsTable, setProtocolsTable] = useState<IProtocol[]>([]);
  const [page, setPage] = useState<number>(1);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [modal, setModal] = useState<{
    modal: "finish" | "delete";
    protocol: IProtocol;
  }>();

  const rows = 13;
  const pages = Math.ceil(protocolRender.length / rows);

  function checkArrays(a1: IProtocol[], a2: IProtocol[]) {
    return JSON.stringify(a1) !== JSON.stringify(a2);
  }
  useEffect(() => {
    if (checkedItems.length !== 0) {
      setProtocolRender(
        protocols.filter((protocol: IProtocol) =>
          checkedItems.includes(protocol.idStatus)
        )
      );
      setPage(1);
    } else if (checkArrays(protocolRender, protocols)) {
      setProtocolRender(protocols);
    }
  }, [checkedItems, protocols, protocolRender]);
  useEffect(() => {
    if (search) {
      setProtocolsTable(
        protocolRender.filter(
          (protocol: IProtocol) =>
            protocol.id?.toString().includes(search) ||
            protocol.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setProtocolsTable(protocolRender.slice((page - 1) * rows, page * rows));
    }

    setVisibleRows({});
  }, [page, search, protocolRender]);

  useEffect(() => {
    if (session) {
      const interval = setInterval(() => {
        dispatch(getChamados(session.user.token));
      }, 5000);

      return () => clearInterval(interval);
    }
  });
  const [visibleRows, setVisibleRows] = useState<{ [key: number]: boolean }>(
    {}
  );
  const toggleVisibility = (rowId: number) => {
    setVisibleRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId], // Alterna o estado da linha específica
    }));
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const numericValue = parseInt(value);

    if (checked) {
      setCheckedItems([...checkedItems, numericValue]); // Adiciona o valor quando marcado
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== numericValue)); // Remove o valor quando desmarcado
    }
  };

  const handleDelete = (protocol: IProtocol) => {
    setModal({ modal: "delete", protocol });
  };

  const handleUpProtocol = (protocol: IProtocol) => {
    if (protocol.idStatus + 1 === 3) {
      dispatch(resetLoading())
      setModal({ modal: "finish", protocol });
    } else {
      const protocolUpStatus: IProtocol = {
        ...protocol,
        idStatus: protocol.idStatus + 1,
      };
      dispatch(
        putChamado({
          chamado: protocolUpStatus,
          token: session?.user.token,
          role: session?.user.role,
        })
      );
    }
  };

  return (
    <div className="flex flex-col mb-10">
      {modal?.modal == "finish" && <ModalFinish protocol={modal.protocol} cancelModal={setModal}/>}
      {modal?.modal == "delete" && <ModalDelete protocol={modal.protocol} cancelModal={setModal}/>}
      <div className="bg-teclado bg-cover h-fit ">
        <nav className="flex flex-col-reverse md:flex-row bg-[#1e1e1eda] h-full items-center justify-between text-white px-12 py-6">
          <div className="flex flex-wrap-reverse gap-12 w-full py-6">
            <label
              htmlFor="search"
              className="flex relative w-full sm:w-2/4 lg:w-1/4 min-w-60 lg:min-w-40 h-1/2 self-center"
            >
              <div
                className="absolute top-1/2 transform -translate-y-1/2 right-2
                        flex items-center
                        pointer-events-none"
              >
                <IconSearch width={24} height={24} color="#747474" />
              </div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                name="search"
                id="search"
                className="rounded-md font-md text-black text-lg w-full py-1 px-2 pr-8"
              />
            </label>
            <div className="flex  flex-wrap md:flex-wrap gap-6  items-center text-[#D9D9D9] font-medium">
              <label
                htmlFor="open"
                className="flex items-baseline text-lg gap-2"
              >
                <input
                  type="checkbox"
                  name="open"
                  id="open"
                  value="1"
                  checked={checkedItems.includes(1)}
                  onChange={handleCheckboxChange}
                />
                Aberto
              </label>
              <label
                htmlFor="inProcess"
                className="flex  items-baseline text-lg gap-2"
              >
                <input
                  type="checkbox"
                  name="inProcess"
                  id="inProcess"
                  value="2"
                  checked={checkedItems.includes(2)}
                  onChange={handleCheckboxChange}
                />
                Em Atendimento
              </label>
              <label
                htmlFor="closed"
                className="flex items-baseline text-lg gap-2"
              >
                <input
                  type="checkbox"
                  name="closed"
                  id="closed"
                  value="3"
                  checked={checkedItems.includes(3)}
                  onChange={handleCheckboxChange}
                />
                Finalizado
              </label>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-12 items-center justify-between  ">
            <h1 className="text-2xl font-semibold">DASHBOARD</h1>
            <ButtonLogout type="user-ti" color="white" />
          </div>
        </nav>
      </div>
      <div className="flex flex-col w-11/12 content-center self-center mt-6 overflow-x-auto ">
        <div className="flex justify-center">
          {errorProtocol && <CardError title={errorProtocol}/> }
        </div>
       <table className="table-auto min-w-max text-center box-border">
          <thead className="bg-[#313131] text-white h-10 ">
            <tr>
              <th className="rounded-tl-md px-2">ID</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Status</th>
              <th>Setor</th>
              <th>Solicitante</th>
              <th>Origem</th>
              <th>Atendimento</th>
              <th className="rounded-tr-md">Opções</th>
            </tr>
          </thead>

          <tbody className="font-semibold">
            <tr>
              <td className="min-h-2 flex"></td>
            </tr>
            {protocolsTable &&
              protocolsTable.map((protocol: IProtocol, id) => (
                <Fragment key={id}>
                  <tr className="bg-[#F4F4F4] border border-[#CBCBCB] shadow-md h-10">
                    <td className="px-2">{protocol.id}</td>
                    <td className="px-2">
                      {protocol.createdAt
                        ? new Date(protocol.createdAt).toLocaleDateString()
                        : ""}
                    </td>
                    <td className="px-2">
                      {protocol.createdAt
                        ? new Date(protocol.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : ""}
                    </td>
                    <td className="px-2">{protocol.status?.status}</td>
                    <td className="px-2">{protocol.sector?.sector}</td>
                    <td className="px-2">{protocol.name}</td>
                    <td className="px-2">{protocol.origin?.origin}</td>
                    <td className="px-2">{protocol.service?.service}</td>
                    <td className="px-2">
                      <div className="flex flex-wrap justify-center gap-2 p-1">
                        <Image
                          className="cursor-pointer"
                          src={"/icons/trash.png"}
                          onClick={() => handleDelete(protocol)}
                          width={20}
                          height={20}
                          alt="excluir"
                        />
                        <Image
                          className={`${
                            visibleRows[id] ? "rotate-0" : "rotate-90"
                          } cursor-pointer `}
                          onClick={() => toggleVisibility(id)}
                          src={"/icons/arrow.png"}
                          width={20}
                          height={20}
                          alt="mais detalhes"
                        />
                        {protocol.idStatus === 2 && (
                          <Image
                            className="cursor-pointer"
                            src={"/icons/checkGreen.png"}
                            width={20}
                            height={20}
                            alt="concluir"
                            onClick={() => handleUpProtocol(protocol)}
                          />
                        )}
                        {protocol.idStatus === 1 && protocol.idOrigin !== 3 && (
                          <Image
                            className="cursor-pointer"
                            src={"/icons/plus.png"}
                            width={20}
                            height={20}
                            alt="Subir processo"
                            onClick={() => handleUpProtocol(protocol)}
                          />
                        )}
                        {protocol.idStatus === 1 && protocol.idOrigin === 3 && (
                          <Link
                            href={`/dashboard/criar-usuario/${protocol.id}`}
                          >
                            <Image
                              className="cursor-pointer"
                              src={"/icons/plus.png"}
                              width={20}
                              height={20}
                              alt="Subir processo"
                            />
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={9} className="h-2">
                      <div
                        id="myElement"
                        className={`flex gap-12 text-start overflow-hidden transition-all duration-200 ease-in-out ${
                          visibleRows[id]
                            ? "opacity-100 max-h-screen  m-6  "
                            : "opacity-0 max-h-0 m-0"
                        }`}
                      >
                        <div className="flex flex-col items-start ">
                          <span className="text-[#848282]">Detalhes:</span>
                          <span>{protocol.details}</span>
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-[#848282]">Email:</span>

                          <span className="flex gap-2 ">
                            {protocol.email}
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
                          <Link
                            href={`/dashboard/editar/${protocol.id}`}
                            className="flex gap-2 "
                          >
                            <Image
                              className="cursor-pointer"
                              src={"/icons/pincel.png"}
                              width={18}
                              height={18}
                              alt="Editar"
                            />
                          </Link>
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-[#848282]">
                            Observações Interna:
                          </span>
                          <span>{protocol.observation}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </Fragment>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex self-center w-11/12 bg-[#313131] text-white justify-end h-10 rounded-b-md gap-6 items-center px-12">
        <span>
          {(page - 1) * rows + 1}-
          {page * rows <= protocolRender.length
            ? page * rows
            : protocolRender.length}{" "}
          de {protocolRender.length}
        </span>
        <IconTwoArrowPage
          className="cursor-pointer"
          color="white"
          height={16}
          width={16}
          onClick={() => setPage(1)}
        />
        <IconArrowPage
          className="cursor-pointer"
          color="white"
          height={16}
          width={16}
          onClick={() => setPage(page !== 1 ? page - 1 : 1)}
        />
        <IconArrowPage
          className="rotate-180 cursor-pointer"
          color="white"
          height={16}
          width={16}
          onClick={() => setPage(page + 1 >= pages ? pages : page + 1)}
        />
        <IconTwoArrowPage
          className="rotate-180 cursor-pointer"
          color="white"
          height={16}
          width={16}
          onClick={() => setPage(pages)}
        />
      </div>
    </div>
  );
}
