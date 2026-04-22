const HTTP_STATUS = {
  OK_200: 200,
  CREATED_201: 201,
  NO_CONTENT_204: 204,
  BAD_REQUEST_400: 400,
  NOT_FOUND_404: 404,
};

type HTTPStatusKey = keyof typeof HTTP_STATUS;

type HTTPStatusType = (typeof HTTP_STATUS)[HTTPStatusKey];

export { HTTP_STATUS, type HTTPStatusType };
