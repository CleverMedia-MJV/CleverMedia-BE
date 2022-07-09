class CustomError extends Error {
  constructor(err) {
    super(err);
    this.status = 500 || err.status;
    this.message = err.message;
  }

  static send(err, req, res, next) {
    next(new CustomError(err));
  }
}

module.exports = CustomError;
