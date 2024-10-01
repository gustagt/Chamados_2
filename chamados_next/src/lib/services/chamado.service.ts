
import { api, requestConfig } from "../utils/config";

const postChamado = async (chamado: IProtocol, token?: string) => {
  const config = requestConfig("POST", chamado, token);

  try {
    const res = await fetch(`${api}/chamados`, config).then((res) =>
      res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};
const postReview = async (review: IReview, token?: string) => {
  const config = requestConfig("POST", review, token);

  try {
    const res = await fetch(`${api}/reviews`, config).then((res) =>
      res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};



const chamadoService = {
    postChamado,
    postReview
};

export default chamadoService;
