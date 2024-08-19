import { ModelStatic } from "sequelize";
import resp from "../utils/resp";
import Solicitante from "../database/models/solicitante";

class SolicitanteService {
    private model : ModelStatic<Solicitante> = Solicitante;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default SolicitanteService
