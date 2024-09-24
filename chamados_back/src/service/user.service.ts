import { ModelStatic, Optional } from "sequelize";
import { resp } from "../utils/resp";
import User from "../database/models/user.model";


class UserService {
  private model: ModelStatic<User> = User;

  async getAll() {
    const status = await this.model.findAll();
    return resp(200, status);
  }

  async insert(data: any) {
    const status = await this.model.create(data);
    
    return resp(200, status);
  }
}

export default UserService;
