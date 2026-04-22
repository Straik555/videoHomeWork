import { VideoType } from "../types/video.type";
import { UpdateVideoModelType } from "../types/model/video/updateVideo.model.type";

export const getUpdateVideo = (
  dbVideo: VideoType,
  newVideo: UpdateVideoModelType,
) => {
  dbVideo.title = newVideo.title;
  dbVideo.author = newVideo.author;
  dbVideo.canBeDownloaded = newVideo.canBeDownloaded;
  dbVideo.availableResolutions = newVideo.availableResolutions;
  dbVideo.minAgeRestriction = newVideo.minAgeRestriction;
  dbVideo.publicationDate = newVideo.publicationDate;
};
