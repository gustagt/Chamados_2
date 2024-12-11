
import { api, requestConfig } from "../utils/config";

const putUser = async (user: IUser, token?:string, role?: string) =>{
  const config = requestConfig("PUT", user ,token,null,role);

  try {
    const res = await fetch(`${api}/users/${user.id}`, config).then((res) =>
      res.json()
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};


const userService = {
  putUser
};

export default userService;
