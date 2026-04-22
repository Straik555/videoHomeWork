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

const titleValidation = ({ title, errorMessage }: TitleValidationType) => {
  if (!title) {
    errorMessage.push({ message: "The title is required", field: "title" });
  }
  if (title.length > 40) {
    errorMessage.push({
      message: "The title must be less than 40 characters",
      field: "title",
    });
  }
};

const authorValidation = ({ author, errorMessage }: AuthorValidationType) => {
  if (!author) {
    errorMessage.push({ message: "The author is required", field: "author" });
  }
  if (author.length > 20) {
    errorMessage.push({
      message: "The author must be less than 20 characters",
      field: "author",
    });
  }
};

const availableResolutionsValidation = ({
  availableResolutions,
  errorMessage,
}: AvailableResolutionsValidationType) => {
  if (!Array.isArray(availableResolutions)) {
    errorMessage.push({
      message: "The availableResolutions must be an array",
      field: "availableResolutions",
    });
  }

  if (availableResolutions.length > 0) {
    includesKeyInEnum(
      availableResolutions,
      getEnumKeys(AvailableResolutionsType),
      errorMessage,
    );
  }
};

const canBeDownloadedValidation = ({
  canBeDownloaded,
  errorMessage,
}: CanBeDownloadedValidationType) => {
  const isBoolean = (val: any): val is boolean => typeof val === "boolean";

  if (!isBoolean(canBeDownloaded)) {
    errorMessage.push({
      message: "Incorrect format can Be Downloaded",
      field: "canBeDownloaded",
    });
  }
  if (!canBeDownloaded) {
    errorMessage.push({
      message: "The canBeDownloaded is required",
      field: "canBeDownloaded",
    });
  }
};

const minAgeRestrictionValidation = ({
  minAgeRestriction,
  errorMessage,
}: MinAgeRestrictionValidationType) => {
  const isNoRestriction = minAgeRestriction === null;
  if (isNoRestriction) {
    return;
  }
  if (!minAgeRestriction) {
    errorMessage.push({
      message: "The minAgeRestriction is required",
      field: "minAgeRestriction",
    });
  }

  if (typeof minAgeRestriction !== "number") {
    errorMessage.push({
      message: "Incorrect format minAgeRestriction",
      field: "minAgeRestriction",
    });
  }

  if (typeof minAgeRestriction === "number" && minAgeRestriction > 18) {
    errorMessage.push({
      message: "The minAgeRestriction must be less than 18 characters",
      field: "minAgeRestriction",
    });
  }
};

const publicationDateValidation = ({
  publicationDate,
  errorMessage,
}: PublicationDateValidationType) => {
  const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  if (!isoRegex.test(publicationDate)) {
    errorMessage.push({
      message: "Incorrect format publication Date",
      field: "publicationDate",
    });
  }
  const date = new Date(publicationDate);
  const isDateValid =
    !isNaN(date.getTime()) && date.toISOString() === publicationDate;

  if (!isDateValid) {
    errorMessage.push({
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
