import { VideoType } from "../../video.type";

export type CreateVideoModelType = Pick<
  VideoType,
  "title" | "author" | "availableResolutions"
>;
