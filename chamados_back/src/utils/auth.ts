import "dotenv/config";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

const encode = (data: any) => {
  const token = jwt.sign(
    {
      data,
    },
    JWT_SECRET || "teste",
    {
      expiresIn: "3h",
    }
  );

  return token;
};

const decode = (token: string) => {
    const decoded = jwt.verify(token, JWT_SECRET || "teste");
    return decoded;
};

export default {
  encode,
  decode,
};
