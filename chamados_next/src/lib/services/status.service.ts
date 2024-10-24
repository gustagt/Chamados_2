import { api, requestConfig } from "../utils/config";


const getStatus = async (token?: string, role?:string) => {
    
  const config = requestConfig("GET", null, token, null, role);

  try {
   
    const res = await fetch(`${api}/status`, config).then(
      (res) => res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};


const statusService = {
  
  getStatus,

};

export default statusService;
