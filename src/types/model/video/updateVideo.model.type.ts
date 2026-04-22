import { VideoType } from "../../video.type";

export type UpdateVideoModelType = Omit<VideoType, "id" | "createdAt">;
