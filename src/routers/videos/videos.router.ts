import { Router } from "express";
import { getVideosRouter } from "./getVideos.router";
import { postVideoRouter } from "./postVideo.router";
import { putVideoRouter } from "./putVideo.router";
import { deleteVideoRouter } from "./deleteVideo.router";
import { testingRouter } from "./testing.router";

export const videosRouter = Router();

videosRouter.use("/", getVideosRouter);
videosRouter.use("/", postVideoRouter);
videosRouter.use("/", putVideoRouter);
videosRouter.use("/", deleteVideoRouter);
videosRouter.use("/", testingRouter);
