import { RequestWithBody } from "../../types/generalRequest.type";
import { CreateVideoModelType } from "../../types/model/video/createVideo.model.type";
import { Response, Router } from "express";
import { VideoType } from "../../types/video.type";
import { ErrorType } from "../../types/error.type";
import { HTTP_STATUS } from "../../config/httpStatus";
import { mockDB } from "../../db/db";
import { postInputValidation } from "../../validation/videos/postInputValidation";

export const postVideoRouter = Router();
postVideoRouter.post(
  "/",
  (
    req: RequestWithBody<CreateVideoModelType>,
    res: Response<VideoType | ErrorType>,
  ) => {
    const { title, author, availableResolutions } = req.body;
    let errorMessage: ErrorType = [];

    postInputValidation({ title, author, availableResolutions }, errorMessage);

    if (errorMessage.length > 0) {
      res.status(HTTP_STATUS.BAD_REQUEST_400).json(errorMessage);
      return;
    }

    const publicationDate = new Date();
    publicationDate.setDate(publicationDate.getDate() + 1);

    const responseNewVideo = {
      id: +new Date(),
      title,
      author,
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: new Date().toISOString(),
      publicationDate: publicationDate.toISOString(),
      availableResolutions,
    };

    mockDB.videos.push(responseNewVideo);

    res.status(HTTP_STATUS.CREATED_201).json(responseNewVideo);
  },
);
