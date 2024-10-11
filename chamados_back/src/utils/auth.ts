import "dotenv/config";
import jwt from "jsonwebtoken";

const { JWT_SECRET, JWT_SECRET_TI } = process.env;

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

const encodeTi = (data: any) => {
  const token = jwt.sign(
    {
      data,
    },
    JWT_SECRET_TI || "ti",
    {
      expiresIn: "3h",
    }
  );

  return token;
};

const decodeTi = (token: string) => {
    const decoded = jwt.verify(token, JWT_SECRET_TI || "ti");
    return decoded;
};

export default {
  encode,
  decode,
  encodeTi,
  decodeTi
};
