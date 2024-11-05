import { api, requestConfig } from "../utils/config";

const getAcessos = async (token?: string, role?: string) => {
  const config = requestConfig("GET", null, token, null,role);

  try {
    const res = await fetch(`${api}/acessos`, config).then((res) =>
      res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};

const acessoService = {
    getAcessos,
};

export default acessoService;
