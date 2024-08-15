import express from "express";
import cors from "cors";
import { Router, Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

const route = Router();

app.use(route);

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "API CHAMADOS" });
});

export default app;
