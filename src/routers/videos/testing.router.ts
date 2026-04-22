import { Request, Response, Router } from "express";
import { HTTP_STATUS } from "../../config/httpStatus";
import { mockDB } from "../../db/db";

export const testingRouter = Router();

testingRouter.delete("/", (req: Request, res: Response) => {
  mockDB.videos = [];
  res.sendStatus(HTTP_STATUS.NO_CONTENT_204);
});
