class PromiseError extends Error {
  constructor() {
    super('Unhandled Promise Rejection');
  }
}

module.exports = PromiseError;
