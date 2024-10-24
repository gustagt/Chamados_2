import { api, requestConfig } from "../utils/config";


const getOrigens = async (token?: string, role?:string) => {
    
  const config = requestConfig("GET", null, token, null, role);

  try {
   
    const res = await fetch(`${api}/origens`, config).then(
      (res) => res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};


const origemService = {
  
    getOrigens,

};

export default origemService;
