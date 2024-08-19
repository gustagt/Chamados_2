import { ModelStatic } from "sequelize";
import Acesso from "../database/models/acesso";
import resp from "../utils/resp";

class AcessoService {
    private model : ModelStatic<Acesso> = Acesso;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default AcessoService