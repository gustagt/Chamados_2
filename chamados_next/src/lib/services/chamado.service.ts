
import { api, requestConfig } from "../utils/config";

const getChamados = async ( token?: string) => {
  const config = requestConfig("GET", null, token,null,"ti");


  try {
    const res = await fetch(`${api}/chamados`, config).then((res)=>res.json())
    return res
  } catch (error) {
    console.error(error);
  }
}
const getChamadoId = async (id:number, token?: string, role?: string) => {
  const config = requestConfig("GET", null, token, null, role);

  try {
    const res = await fetch(`${api}/chamados/${id}`, config).then((res)=>res.json())
    return res
  } catch (error) {
    console.error(error);
  }
}

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

const putChamado = async (protocol: IProtocol, token?:string, role?: string, message?: string) =>{
  const config = requestConfig("PUT", {form: protocol, message} ,token,null,role);

  try {
    const res = await fetch(`${api}/chamados/${protocol.id}`, config).then((res) =>
      res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};


const deleteChamado = async (id: number, token?: string) => {
  const config = requestConfig("DELETE", null ,token,null,"ti");

  try {
    const res = await fetch(`${api}/chamados/${id}`, config).then((res) =>
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
    postReview,
    getChamadoId,
    getChamados,
    deleteChamado,
    putChamado
};

export default chamadoService;
