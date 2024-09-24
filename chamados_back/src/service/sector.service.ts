import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import Sector from "../database/models/sector.model";

class SectorService {
    private model : ModelStatic<Sector> = Sector;

    async getAll() {
        const status = await this.model.findAll({order:['id']})
        return resp(200, status)
    }
}

export default SectorService
