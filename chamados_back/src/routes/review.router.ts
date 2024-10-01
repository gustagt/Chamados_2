import { Router } from "express";
import ReviewController from "../controllers/review.controller";

const  control = new ReviewController();

const reviewRouter = Router();

reviewRouter.get("/reviews", control.getAll.bind(control));
reviewRouter.post("/reviews", control.post.bind(control));
reviewRouter.get("/reviews/protocol/:id", control.getAll.bind(control));

export default reviewRouter
