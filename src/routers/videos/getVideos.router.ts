import { Request, Response, Router } from "express";
import { VideoType } from "../../types/video.type";
import { HTTP_STATUS } from "../../config/httpStatus";
import { mockDB } from "../../db/db";
import { RequestWithParams } from "../../types/generalRequest.type";
import { UriParamsById } from "../../types/model/UriParamsById.model";
import { ErrorResponse } from "../../types/error.type";

export const getVideosRouter = Router();

getVideosRouter.get("/", (req: Request, res: Response<VideoType[]>) => {
  res.status(HTTP_STATUS.OK_200).json(mockDB.videos);
});

getVideosRouter.get(
  "/:id",
  (
    req: RequestWithParams<UriParamsById>,
    res: Response<VideoType | ErrorResponse>,
  ) => {
    const idVideo = Number(req.params.id);

    const foundVideo = mockDB.videos.find((video) => video.id === idVideo);

    if (!foundVideo) {
      res.status(HTTP_STATUS.NOT_FOUND_404).json({
        errorsMessages: [
          { message: "The video does not exist", field: "Incorrect id" },
        ],
      });
      return;
    }

    res.json(foundVideo);
  },
);
