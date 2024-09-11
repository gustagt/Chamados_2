import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import ChamadoSistemaInterno from "../database/models/chamadoSistemaInterno";

class ChamadoSistemaInternoService {
    private model : ModelStatic<ChamadoSistemaInterno> = ChamadoSistemaInterno;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default ChamadoSistemaInternoService
