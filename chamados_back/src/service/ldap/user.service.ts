import { Client } from "ldapts";
import config from "../../ldap/config/config";
import {resp} from "../../utils/resp";
import jwt from "../../utils/auth";

class UserLdap {
  // Função para encontrar o DN de um usuário com base no sAMAccountName
  static async findUserDN(sAMAccountName: string): Promise<string | null> {
    const client = new Client({ url: config.url });

    try {
      await client.bind(config.bindDN, config.bindCredentials);

      const result = await client.search(config.baseDN, {
        filter: `(sAMAccountName=${sAMAccountName})`,
        scope: "sub",
        attributes: ["distinguishedName"],
      });

      const entry = result.searchEntries[0];

      return entry ? entry.dn : null;
    } catch (error) {
 
      return null;
    } finally {
      await client.unbind();
    }
  }

  // Função para autenticar um usuário no AD usando o sAMAccountName
  static async authenticate(sAMAccountName: string, password: string) {
    const userDN = await UserLdap.findUserDN(sAMAccountName);


    if (!userDN) {
      return resp(400, "Usuário não encontrado.");
    }

    const client = new Client({ url: config.url });

    try {
      // Tenta bind com o DN e a senha do usuário para autenticar
      await client.bind(userDN, password);

      const name = userDN.split(",OU")[0]

      const token = jwt.encode({sAMAccountName, name});
      
      return resp(200, { username: sAMAccountName, name, token });
    } catch (error) {
      return resp(500, {
        message: "Falha na autenticação para o usuário: " + sAMAccountName,
        error,
      });
    } finally {
      await client.unbind();
    }
  }
}

export default UserLdap;
