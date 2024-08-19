import { ModelStatic } from "sequelize";
import resp from "../utils/resp";
import AtendimentoSistema from "../database/models/atendimentoSistema";

class AtendimentoSistemaService {
    private model : ModelStatic<AtendimentoSistema> = AtendimentoSistema;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default AtendimentoSistemaService 
