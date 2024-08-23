export default interface IChamado {
    idChamado?: number; 
    dataCriacao: string;
    nomeSolicitante: string;
    usuario: string;
    observacao?: string;
    email?: string;
    observacaoInterna?: string;
    origensIdOrigem: number;
    setoresIdSetor: number;
    statusIdStatus: number;
    atendimentosIdAtendimento: number;
    usersIdUsers?: number;
    chamadosSistemasInternosIdChamadoSistemaInterno?: number;
}