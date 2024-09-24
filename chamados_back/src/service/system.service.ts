import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import System from "../database/models/system.model";

class SystemService {
    private model : ModelStatic<System> = System;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default SystemService 
