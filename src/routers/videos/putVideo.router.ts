import { type Response, Router } from "express";
import { RequestWithParamsAndBody } from "../../types/generalRequest.type";
import { UriParamsById } from "../../types/model/UriParamsById.model";
import { ErrorType } from "../../types/error.type";
import { VideoType } from "../../types/video.type";
import { UpdateVideoModelType } from "../../types/model/video/updateVideo.model.type";
import { mockDB } from "../../db/db";
import { HTTP_STATUS } from "../../config/httpStatus";
import { putInputValidation } from "../../validation/videos/putInputValidation";
import { getUpdateVideo } from "../../utils/getUpdateVideo";

export const putVideoRouter = Router();

putVideoRouter.put(
  "/:id",
  (
    req: RequestWithParamsAndBody<UriParamsById, UpdateVideoModelType>,
    res: Response<ErrorType | VideoType>,
  ) => {
    const idVideo = Number(req.params.id);
    const bodyVideo = req.body;
    const errorMessage: ErrorType = [];

    const foundVideo = mockDB.videos.find((video) => video.id === idVideo);

    if (!foundVideo) {
      res
        .status(HTTP_STATUS.NOT_FOUND_404)
        .json([{ message: "The video does not exist", field: "Incorrect id" }]);
      return;
    }

    putInputValidation(bodyVideo, errorMessage);

    if (errorMessage.length > 0) {
      res.status(HTTP_STATUS.BAD_REQUEST_400).json(errorMessage);
      return;
    }

    getUpdateVideo(foundVideo, bodyVideo);

    res.sendStatus(HTTP_STATUS.NO_CONTENT_204);
  },
);
