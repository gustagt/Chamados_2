import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import TipoContratacao from './../database/models/tipoContratacao';

class TipoContratacaoService {
    private model : ModelStatic<TipoContratacao> = TipoContratacao;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default TipoContratacaoService
