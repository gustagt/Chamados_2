import { ModelStatic } from "sequelize";
import { resp } from "../utils/resp";
import Protocol from "../database/models/protocol.model";
import IProtocol from "../interfaces/IProtocol";
import User from "../database/models/user.model";

class ProtocolService {
  private model: ModelStatic<Protocol> = Protocol;
  

  async getAll() {
    const protocols = await this.model.findAll({
      include: ["sector", "origin", "status", "service", "user"],
      order: [['id', 'DESC']]
    });
    return resp(200, protocols);
  }

  async getId(id: string) {
    const protocol = await this.model.findByPk(id, {
      include: ["sector", "origin", "status", "service", {model:User, as:"user", include: ["contractType", "accesses"]}],
    });
    return resp(200, protocol);
  }

  async insert(protocol: IProtocol) {
    try {
      if (protocol.user?.name) {
        const user = await User.findOne({where: {name: protocol.user?.name}})
         if(user) return resp(500, { message: "Usuario ja existente no banco de dados." })
      }
      const protocolRet = await this.model.create(protocol, {
        include: Protocol.associations.user,
      });

      if (protocol.user?.idAccesses) {
        await protocolRet.user?.addAccesses(protocol.user?.idAccesses);
      }
      return resp(201, protocolRet);
    } catch (error) {
      return resp(500, { message: "Ocorreu um erro ao solicitar chamado", error });
    }
  }

  async put(protocol: Protocol, data: object) {
    try {
      protocol.set(data);

      if (!protocol.changed()) {
        return resp(404, {
          message: "Nenhuma alteração realizada, chamado com dados idênticos",
        });
      }

      await protocol.save();

      return resp(200, protocol);
    } catch (error) {
      return resp(500, { message: "Erro ao atualizar o protocol", error });
    }
  }

  async delete(protocol: Protocol) {
    try {
      await protocol.destroy();
      return resp(200, { sucess: "Protocol deletado com sucesso" });
    } catch (error) {
      return resp(500, { message: "Erro ao deletar o protocol", error });
    }
  }
}

export default ProtocolService;
