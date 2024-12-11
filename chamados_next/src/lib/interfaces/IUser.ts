interface IUser {
  id?: number;
  name: string;
  function: string;
  idContractType: number;
  idAccesses: number[];
  accesses?: IAccess[];
  contractType?: {
    id: number;
    contractType: string;
  };
}
