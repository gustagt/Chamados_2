import { NextFunction, Request, Response } from "express";

import ReviewService from "../service/review.service";
import IReview from "../interfaces/IReview";

class ReviewController {
  private service = new ReviewService();

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.service.getAll();
      res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
   async post(req: Request, res: Response, next: NextFunction) {
    try {
        const form: IReview = req.body
      const { status, data } = await this.service.insert(form);
      res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
  
  async getIdProtocol(req: Request, res: Response, next: NextFunction) {
    try {
      const idProtocol = Number(req.params.id);

      const { status, data } = await this.service.getIdProtocol(idProtocol);
      res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default ReviewController;
