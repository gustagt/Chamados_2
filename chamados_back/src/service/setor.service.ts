import { ModelStatic } from "sequelize";
import resp from "../utils/resp";
import Setor from "../database/models/setor";

class SetorService {
    private model : ModelStatic<Setor> = Setor;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default SetorService
