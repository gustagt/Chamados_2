import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import Access from "../database/models/access.model";

class AccessService {
    private model : ModelStatic<Access> = Access;

    async getAll() {
        const accesses = await this.model.findAll()
        return resp(200, accesses)
    }
}

export default AccessService