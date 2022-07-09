function ErrorHandler(err, req, res, next) {
  res.status(err.status).send(err.message);
}

module.exports = ErrorHandler;
