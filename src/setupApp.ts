import express, { Express } from "express";
import { videosRouter } from "./routers/videos/videos.router";
import { routerPath } from "./routers/routerPath";

const jsonBodyMiddleware = express.json();

export const setupApp = (app: Express) => {
  app.use(jsonBodyMiddleware);
  app.use(routerPath.videos, videosRouter);

  app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
  });
  return app;
};
