export class CustomErrorHandler extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, CustomErrorHandler.prototype);
  }

  static badRequest(message: string = "Bad Request") {
    return new CustomErrorHandler(400, message);
  }

  static unauthorized(message: string = "Unauthorized") {
    return new CustomErrorHandler(401, message);
  }

  static forbidden(message: string = "Forbidden") {
    return new CustomErrorHandler(403, message);
  }

  static notFound(message: string = "Not Found") {
    return new CustomErrorHandler(404, message);
  }

  static internal(message: string = "Internal Server Error") {
    return new CustomErrorHandler(500, message);
  }
}
