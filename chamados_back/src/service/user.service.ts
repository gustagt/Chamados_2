import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import User from './../database/models/user';

class UserService {
    private model : ModelStatic<User> = User;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default UserService
