import { getEnumKeys, includesKeyInEnum } from "./getEnumKey";
import { AvailableResolutionsType } from "../../types/video.type";
import {
  AuthorValidationType,
  AvailableResolutionsValidationType,
  CanBeDownloadedValidationType,
  MinAgeRestrictionValidationType,
  PublicationDateValidationType,
  TitleValidationType,
} from "../../types/validationInput.type";

const titleValidation = ({ title, errorsMessages }: TitleValidationType) => {
  if (!title) {
    errorsMessages.push({ message: "The title is required", field: "title" });
  }
  if (title && title.length > 40) {
    errorsMessages.push({
      message: "The title must be less than 40 characters",
      field: "title",
    });
  }
};

const authorValidation = ({ author, errorsMessages }: AuthorValidationType) => {
  if (!author) {
    errorsMessages.push({ message: "The author is required", field: "author" });
  }
  if (author.length > 20) {
    errorsMessages.push({
      message: "The author must be less than 20 characters",
      field: "author",
    });
  }
};

const availableResolutionsValidation = ({
  availableResolutions,
  errorsMessages,
}: AvailableResolutionsValidationType) => {
  if (!Array.isArray(availableResolutions)) {
    errorsMessages.push({
      message: "The availableResolutions must be an array",
      field: "availableResolutions",
    });
  }

  if (availableResolutions.length > 0) {
    includesKeyInEnum(
      availableResolutions,
      getEnumKeys(AvailableResolutionsType),
      errorsMessages,
    );
  }
};

const canBeDownloadedValidation = ({
  canBeDownloaded,
  errorsMessages,
}: CanBeDownloadedValidationType) => {
  const isBoolean = (val: any): val is boolean => typeof val === "boolean";

  if (!isBoolean(canBeDownloaded)) {
    errorsMessages.push({
      message: "Incorrect format can Be Downloaded",
      field: "canBeDownloaded",
    });
  }
  if (!canBeDownloaded) {
    errorsMessages.push({
      message: "The canBeDownloaded is required",
      field: "canBeDownloaded",
    });
  }
};

const minAgeRestrictionValidation = ({
  minAgeRestriction,
  errorsMessages,
}: MinAgeRestrictionValidationType) => {
  const isNoRestriction = minAgeRestriction === null;
  if (isNoRestriction) {
    return;
  }
  if (!minAgeRestriction) {
    errorsMessages.push({
      message: "The minAgeRestriction is required",
      field: "minAgeRestriction",
    });
  }

  if (typeof minAgeRestriction !== "number") {
    errorsMessages.push({
      message: "Incorrect format minAgeRestriction",
      field: "minAgeRestriction",
    });
  }

  if (typeof minAgeRestriction === "number" && minAgeRestriction > 18) {
    errorsMessages.push({
      message: "The minAgeRestriction must be less than 18 characters",
      field: "minAgeRestriction",
    });
  }
};

const publicationDateValidation = ({
  publicationDate,
  errorsMessages,
}: PublicationDateValidationType) => {
  const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  const date = new Date(publicationDate);
  const isDateValid =
    !isNaN(date.getTime()) && date.toISOString() === publicationDate;

  if (!isDateValid || !isoRegex.test(publicationDate)) {
    errorsMessages.push({
      message: "Incorrect Date",
      field: "publicationDate",
    });
  }
};

export {
  canBeDownloadedValidation,
  titleValidation,
  authorValidation,
  availableResolutionsValidation,
  minAgeRestrictionValidation,
  publicationDateValidation,
};
