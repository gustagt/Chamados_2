import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import Service from "../database/models/service.model";

class ServiceService {
    private model : ModelStatic<Service> = Service;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
    async getOriginId(id: string) {
        const status = await this.model.findAll({where: {idOrigin: id} })
        return resp(200, status)
    }
}

export default ServiceService 
