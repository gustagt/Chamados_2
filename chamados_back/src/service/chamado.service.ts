import { ModelStatic, Optional } from "sequelize";
import {resp} from "../utils/resp";
import Chamado from "../database/models/chamado";
import IChamado from "./../interfaces/chamado";

class ChamadoService {
  private model: ModelStatic<Chamado> = Chamado;

  async getAll() {
    const chamados = await this.model.findAll({
      include: [
        "setor",
        "Origem",
        "status",
        "atendimento",
        "user",
        "chamadoSistemaInterno",
      ],
    });
    return resp(200, chamados);
  }
  async getId(id: string) {
    const chamado = await this.model.findByPk(id, {
      include: [
        "setor",
        "Origem",
        "status",
        "atendimento",
        "user",
        "chamadoSistemaInterno",
      ],
    });
    return resp(200, chamado);
  }

  async insert(data: Optional<IChamado, "idChamado">) {
    try {
      const chamado = await this.model.create(data);
      return resp(201, chamado);
    } catch (error) {
      return resp(500, { message: "Erro ao criar o usuário", error });
    }
  }

  async put(chamado: Chamado, data: object) {
    try {
      chamado.set(data);


      if (!chamado.changed()) {
        return resp(404, {
          message:
            "Nenhuma alteração realizada, chamado com dados idênticos",
        });
      }

      await chamado.save()

      
      return resp(200, chamado);
    } catch (error) {
      return resp(500, { message: "Erro ao atualizar o usuário", error });
    }
  }

  async delete(chamado: Chamado) {
    try {
      await chamado.destroy();
      return resp(200, { message: "Usuário deletado com sucesso" });
    } catch (error) {
      return resp(500, { message: "Erro ao deletar o usuário", error });
    }
  }
}

export default ChamadoService;
