const BaseExceptionL = "./BaseExeception.js";

class BaseRequestException extends BaseException {
  constructor(message) {
    super(message, 400);
  }
}
model.exports = BaseRequestException;
