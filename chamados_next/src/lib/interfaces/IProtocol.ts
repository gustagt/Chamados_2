interface IProtocol {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  applicant: string;
  details?: string;
  email?: string;
  idOrigin: number;
  idSector: number;
  idStatus: number;
  idService: number;
  idSystem?: number;
  observation?:string
  user?: {
    name: string;
    function: string;
    idContractType: number;
    accesses: number[];
  };
  sector?: {
    id: 2;
    sector: "Vice Presidência";
  };
  origin?: {
    id: 1;
    origin: "computador";
  };
  status?: {
    id: 1;
    status: "Criado";
  };
  service?: {
    id: 3;
    service: "Computador lento";
    idOrigin: 1;
  };
}
