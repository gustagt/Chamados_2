import { api, requestConfig } from "../utils/config";

const getAtendiemntoOrigemID = async (origem: number, token?: string) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/atendimentos/origem/${origem}`, config).then((res) =>
      res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};

const atendimentoService = {
    getAtendiemntoOrigemID,
};

export default atendimentoService;
