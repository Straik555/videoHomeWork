import express, { Express } from "express";
import { videosRouter } from "./routers/videos/videos.router";
import { routerPath } from "./routers/routerPath";
import { testingRouter } from "./routers/videos/testing.router";

const jsonBodyMiddleware = express.json();

export const setupApp = (app: Express) => {
  app.use(jsonBodyMiddleware);
  app.use(routerPath.videos, videosRouter);
  app.use(routerPath["testing/all-data"], testingRouter);

  app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
  });
  return app;
};
