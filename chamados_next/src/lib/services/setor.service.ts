import { api, requestConfig } from "../utils/config";


const getSetores = async (token?: string, role?:string) => {
    
  const config = requestConfig("GET", null, token, null, role);

  try {
   
    const res = await fetch(`${api}/setores`, config).then(
      (res) => res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};


const setorService = {
  
  getSetores,

};

export default setorService;
