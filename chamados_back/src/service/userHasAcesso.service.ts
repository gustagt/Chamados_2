import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import UserHasAcesso from '../database/models/userHasAcesso';

class UserHasAcessoService {
    private model : ModelStatic<UserHasAcesso> = UserHasAcesso;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default UserHasAcessoService
