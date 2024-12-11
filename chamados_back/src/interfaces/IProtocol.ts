export default interface IProtocol {
  id?: number;
  name: string;
  applicant: string;
  details?: string;
  email?: string;
  idOrigin: number;
  idSector: number;
  idStatus: number;
  idService: number;
  idSystem?: number;
  createdAt?: Date;
  user?: {
    name: string;
    function: string;
    idContractType: number;
    idAccesses: number[];
  };
}
