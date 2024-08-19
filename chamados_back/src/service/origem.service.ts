import { ModelStatic } from "sequelize";
import resp from "../utils/resp";
import Origem from "../database/models/origem";

class OrigemService {
    private model : ModelStatic<Origem> = Origem;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default OrigemService
