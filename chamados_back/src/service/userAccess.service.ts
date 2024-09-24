import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import UserAccess from '../database/models/userAccess.model';

class UserAccessService {
    private model : ModelStatic<UserAccess> = UserAccess;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default UserAccessService
