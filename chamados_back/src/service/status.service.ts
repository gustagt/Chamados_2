import { ModelStatic } from "sequelize";
import resp from "../utils/resp";
import Status from './../database/models/status';

class StatusService {
    private model : ModelStatic<Status> = Status;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default StatusService
