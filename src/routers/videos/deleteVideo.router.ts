import { type Response, Router } from "express";
import { RequestWithParams } from "../../types/generalRequest.type";
import { UriParamsById } from "../../types/model/UriParamsById.model";
import { HTTP_STATUS } from "../../config/httpStatus";
import { ErrorType } from "../../types/error.type";
import { mockDB } from "../../db/db";

export const deleteVideoRouter = Router();

deleteVideoRouter.delete(
  "/:id",
  (req: RequestWithParams<UriParamsById>, res: Response<ErrorType>) => {
    const idVideo = req.params.id;
    const foundVideo = mockDB.videos.find((video) => video.id === +idVideo);
    if (!idVideo || !foundVideo) {
      res.sendStatus(HTTP_STATUS.NOT_FOUND_404);
      return;
    }

    mockDB.videos = mockDB.videos.filter((video) => video.id !== +idVideo);
    res.sendStatus(HTTP_STATUS.NO_CONTENT_204);
  },
);
