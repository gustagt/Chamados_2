import { ModelStatic } from "sequelize";
import { resp } from "../utils/resp";
import Protocol from "../database/models/protocol.model";
import IProtocol from "../interfaces/IProtocol";

class ProtocolService {
  private model: ModelStatic<Protocol> = Protocol;

  async getAll() {
    const protocols = await this.model.findAll({
      include: ["sector", "origin", "status", "service", "user"],
    });
    return resp(200, protocols);
  }
  async getId(id: string) {
    const protocol = await this.model.findByPk(id, {
      include: ["setor", "Origem", "status", "atendimento", "user"],
    });
    return resp(200, protocol);
  }

  async insert(protocol: IProtocol) {
    try {
      const protocolRet = await this.model.create(protocol, {
        include: Protocol.associations.user,
      });

      if (protocol.user?.accesses) {
        await protocolRet.user?.addAccesses(protocol.user?.accesses);
      }
      return resp(201, protocolRet);
    } catch (error) {
      return resp(500, { message: "Erro ao criar o chamado", error });
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
      return resp(500, { message: "Erro ao atualizar o usuário", error });
    }
  }

  async delete(protocol: Protocol) {
    try {
      await protocol.destroy();
      return resp(200, { message: "Usuário deletado com sucesso" });
    } catch (error) {
      return resp(500, { message: "Erro ao deletar o usuário", error });
    }
  }
}

export default ProtocolService;