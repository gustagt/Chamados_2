import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import Atendimento from "../database/models/atendimento";

class AtendimentoService {
    private model : ModelStatic<Atendimento> = Atendimento;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default AtendimentoService 
