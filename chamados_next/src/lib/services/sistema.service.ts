import { api, requestConfig } from "../utils/config";

const getSistemas = async (token?: string, role?: string) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/sistemas`, config).then((res) =>
      res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};

const sistemaService = {
    getSistemas,
};

export default sistemaService;
