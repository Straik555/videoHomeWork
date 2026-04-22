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
  errorMessage: ErrorType,
) => {
  titleValidation({ title, errorMessage });
  authorValidation({ author, errorMessage });
  availableResolutionsValidation({ availableResolutions, errorMessage });
  canBeDownloadedValidation({ canBeDownloaded, errorMessage });
  minAgeRestrictionValidation({ minAgeRestriction, errorMessage });
  publicationDateValidation({ publicationDate, errorMessage });
};
