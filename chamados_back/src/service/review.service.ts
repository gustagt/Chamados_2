import { ModelStatic } from "sequelize";
import { resp } from "../utils/resp";
import Review from "../database/models/review.model";
import IReview from "../interfaces/IReview";

class ReviewService {
  private model: ModelStatic<Review> = Review;

  async getAll() {
    const status = await this.model.findAll({ order: ["id"] });
    return resp(200, status);
  }
  async getIdProtocol(id: number) {
    const status = await this.model.findAll({
      order: ["id"],
      where: { idProtocol: id },
    });
    return resp(200, status);
  }

  async insert(review: IReview) {
    const status = await this.model.create(review);
    return resp(200, status);
  }
}

export default ReviewService;
