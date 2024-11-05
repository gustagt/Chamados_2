import { api, requestConfig } from "../utils/config";


const getTiposContratacoes = async (token?: string, role?:string) => {
    
  const config = requestConfig("GET", null, token, null, role);

  try {
   
    const res = await fetch(`${api}/tipos-contratacoes`, config).then(
      (res) => res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};


const tiposContratacoesService = {
  
    getTiposContratacoes,

};

export default tiposContratacoesService;
