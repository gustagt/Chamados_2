import { api, requestConfig } from "../utils/config";

const login = async (data: any) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(`${api}/login`, config).then((res) =>
      res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};
const loginTi = async (data: any) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(`${api}/login/ti`, config).then((res) =>
      res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};

const authService = {
    login,
    loginTi
};

export default authService;
