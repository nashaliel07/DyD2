class BasesException extends Error {
  constructor(message, statusCode) {
    super(message, { captureEvents: { status: statusCode } });
  }
}

module.exports = BasesException;
