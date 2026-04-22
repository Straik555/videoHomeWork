import { VideoType } from "./video.type";
import { ErrorResponse } from "./error.type";

type TitleValidationType = ErrorResponse & Pick<VideoType, "title">;
type AuthorValidationType = ErrorResponse & Pick<VideoType, "author">;
type AvailableResolutionsValidationType = ErrorResponse &
  Pick<VideoType, "availableResolutions">;
type CanBeDownloadedValidationType = ErrorResponse &
  Pick<VideoType, "canBeDownloaded">;

type MinAgeRestrictionValidationType = ErrorResponse &
  Pick<VideoType, "minAgeRestriction">;

type PublicationDateValidationType = ErrorResponse &
  Pick<VideoType, "publicationDate">;

export type {
  TitleValidationType,
  AuthorValidationType,
  AvailableResolutionsValidationType,
  CanBeDownloadedValidationType,
  MinAgeRestrictionValidationType,
  PublicationDateValidationType,
};
