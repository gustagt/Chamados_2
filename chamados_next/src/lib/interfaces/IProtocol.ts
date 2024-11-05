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
    idAccesses: number[];
    accesses?: IAccess[];
    contractType?: {
      id: number;
      contractType: string;
    };
  };
  sector?: {
    id: number;
    sector: string;
  };
  origin?: {
    id: number;
    origin: string;
  };
  status?: {
    id: number;
    status: string;
  };
  service?: {
    id: number;
    service: string;
    idOrigin: number;
  };
}


