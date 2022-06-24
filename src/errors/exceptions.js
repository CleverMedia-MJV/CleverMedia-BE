const isProduction = require('../../config/stage')();
const PromiseError = require('./uncaughtPromise');
const reportErr = require('../../prodHandlers/reportErr');

function unhandledRejection(app) {
  return process.on('unhandledRejection', (err) => {
    if (isProduction) {
      reportErr(err);
    } else {
      /* eslint-disable no-console */
      console.log(err.name, err.message);
      console.log('Unhandled rejection, xpan gracefully shutting down!!!');
      /* eslint-disable no-console */
    }
    app.close(() => {
      throw new PromiseError();
    });
  });
}

function uncaughtExceptions() {
  return process.on('uncaughtException', (err) => {
    if (isProduction) {
      reportErr(err);
    } else {
      /* eslint-disable no-console */
      console.log('err', err.stack);
      console.log('Uncaught exception, xpan gracefully terminating!!!');
      /* eslint-disable no-console */
    }
    throw new Error('Closing');
  });
}

module.exports = {
  unhandledRejection,
  uncaughtExceptions,
};
