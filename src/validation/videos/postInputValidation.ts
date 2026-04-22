import { CreateVideoModelType } from "../../types/model/video/createVideo.model.type";
import { ErrorType } from "../../types/error.type";
import {
  authorValidation,
  availableResolutionsValidation,
  titleValidation,
} from "./videoInputValidation";

export const postInputValidation = (
  { author, title, availableResolutions }: CreateVideoModelType,
  errorsMessages: ErrorType,
) => {
  titleValidation({ title, errorsMessages });
  authorValidation({ author, errorsMessages });
  availableResolutionsValidation({ availableResolutions, errorsMessages });
};
