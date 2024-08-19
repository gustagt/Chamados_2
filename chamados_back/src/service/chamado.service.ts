import { ModelStatic } from "sequelize";
import resp from "../utils/resp";
import Chamado from "../database/models/chamado";

class ChamadoService {
    private model : ModelStatic<Chamado> = Chamado;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default ChamadoService
