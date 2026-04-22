import { AvailableResolutionsType, VideoType } from "../types/video.type";

type MockDBType = {
  videos: VideoType[];
};

export const mockDB: MockDBType = {
  videos: [
    {
      id: 1,
      title: "1",
      author: "1",
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: "2026-04-20T17:18:29.127Z",
      publicationDate: "2026-04-20T17:18:29.127Z",
      availableResolutions: [AvailableResolutionsType.P144],
    },
    {
      id: 2,
      title: "2",
      author: "2",
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: "2026-04-20T17:18:29.127Z",
      publicationDate: "2026-04-20T17:18:29.127Z",
      availableResolutions: [AvailableResolutionsType.P360],
    },
    {
      id: 3,
      title: "3",
      author: "3",
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: "2026-04-20T17:18:29.127Z",
      publicationDate: "2026-04-20T17:18:29.127Z",
      availableResolutions: [AvailableResolutionsType.P480],
    },
  ],
};
