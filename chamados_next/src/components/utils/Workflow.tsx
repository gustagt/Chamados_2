import IconCheckConsult from "../Icons/IconCheckConsult";

export default function Workflow({ chamado }: WorkflowProps) {
  let status1;
  let status2;
  let status3;
  switch (chamado.idStatus) {
    case 3:
      status1 = 3;
      status2 = 3;
      status3 = 3;
      break;
    case 2:
      status1 = 3;
      status2 = 2;
      status3 = 1;
      break;
    case 1:
      status1 = 3;
      status2 = 1;
      status3 = 1;
      break;

    default:
      status1 = 1;
      status2 = 1;
      status3 = 1;
      break;
  }
  return (
    <section className="flex sm:flex-col">
      <div className="flex flex-col sm:flex-row self-center gap-2 sm:w-[86%] ">
        <div>
          <IconCheckConsult status={status1} />
        </div>
        <div className={`block w-0.5 ml-4 h-16 sm:w-1/2 sm:h-0.5 sm:ml-0  self-auto sm:self-center ${chamado.idStatus !== 1 ? "bg-[#0B612C]":"bg-[#B0B0B0]"}`}></div>

        <div>
          <IconCheckConsult status={status2} />
        </div>
        <div className={`block w-0.5 ml-4 h-16 sm:w-1/2 sm:h-0.5 sm:ml-0  self-auto sm:self-center ${chamado.idStatus === 3 ? "bg-[#0B612C]":"bg-[#B0B0B0]"}`}></div>

        <div>
          <IconCheckConsult status={status3} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between m-2 text-center text-sm font-medium">
        <span className={`${(status1 === 2 || status1 ===3) && "text-[#0B612C]"}`}>Chamado Aberto</span>
        <span className={`${(status2 === 2 || status2 ===3) && "text-[#0B612C]"}`}>Seu Chamado está sendo atendido</span>
        <span className={`${(status3 === 2 || status3 ===3) && "text-[#0B612C]"}`}>Chamado Finalizado</span>
      </div>
    </section>
  );
}

type WorkflowProps = {
  chamado: IProtocol;
};
