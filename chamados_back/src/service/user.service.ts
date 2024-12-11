import { ModelStatic, Optional } from "sequelize";
import { resp } from "../utils/resp";
import User from "../database/models/user.model";
import IUser from "../interfaces/IUser";


class UserService {
  private model: ModelStatic<User> = User;

  async getAll() {
    const users = await this.model.findAll();
    return resp(200, users);
  }

  async getId(id: string) {
    const user = await this.model.findByPk(id, {
      include: ["contractType", "accesses"]
    });
    return resp(200, user);
  }

  async insert(data: any) {
    const status = await this.model.create(data);
    
    return resp(200, status);
  }

  async put(user: User, data: IUser) {

    try {
      user.set(data);
      
      if (!user.changed() && JSON.stringify(user.accesses?.map((access)=> access.id)) === JSON.stringify(data.idAccesses)) {
        return resp(404, {
          message: "Nenhuma alteração realizada, chamado com dados idênticos",
        });
      }

      await user.save();
      
      await user.setAccesses(data.idAccesses);
   
      await user.reload()

      return resp(200, user);
    } catch (error) {
      return resp(500, { message: "Erro ao atualizar o usuario", error });
    }
  }
}

export default UserService;
