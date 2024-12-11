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
  user?: IUser;
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


