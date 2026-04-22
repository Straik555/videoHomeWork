import { ErrorType } from "../../types/error.type";
import { UpdateVideoModelType } from "../../types/model/video/updateVideo.model.type";
import {
  authorValidation,
  availableResolutionsValidation,
  canBeDownloadedValidation,
  minAgeRestrictionValidation,
  publicationDateValidation,
  titleValidation,
} from "./videoInputValidation";

export const putInputValidation = (
  {
    author,
    title,
    availableResolutions,
    minAgeRestriction,
    publicationDate,
    canBeDownloaded,
  }: UpdateVideoModelType,
  errorsMessages: ErrorType,
) => {
  titleValidation({ title, errorsMessages });
  authorValidation({ author, errorsMessages });
  availableResolutionsValidation({ availableResolutions, errorsMessages });
  canBeDownloadedValidation({ canBeDownloaded, errorsMessages });
  minAgeRestrictionValidation({ minAgeRestriction, errorsMessages });
  publicationDateValidation({ publicationDate, errorsMessages });
};
