import { ModelStatic } from "sequelize";
import {resp} from "../utils/resp";
import ContractType from '../database/models/contractType.model';

class ContractTypeService {
    private model : ModelStatic<ContractType> = ContractType;

    async getAll() {
        const status = await this.model.findAll()
        return resp(200, status)
    }
}

export default ContractTypeService
