import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import Origin from "../database/models/origin.model";

class OriginService {
    private model : ModelStatic<Origin> = Origin;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default OriginService
