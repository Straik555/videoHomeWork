import { AvailableResolutionsType } from "../../types/video.type";
import { ErrorType } from "../../types/error.type";

const getEnumKeys = <T extends object>(enumObj: T): string[] =>
  Object.keys(enumObj);

const includesKeyInEnum = (
  arr1: AvailableResolutionsType[],
  arr2: string[],
  errorsMessages: ErrorType,
) => {
  for (const res of arr1) {
    if (!arr2.includes(res)) {
      errorsMessages.push({
        message: `${res} that format is not valid`,
        field: "availableResolutions",
      });
      break;
    }
  }
};

export { getEnumKeys, includesKeyInEnum };
