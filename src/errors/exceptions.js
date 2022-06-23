const isProduction = require('../../config/stage')();
const PromiseError = require('./uncaughtPromise');
const reportErr = require('../../prodHandlers/reportErr');

function unhandledRejection(app) {
  return process.on('unhandledRejection', (err) => {
    if (isProduction) {
      reportErr(err);
    } else {
      console.log(err.name, err.message);
      console.log('Unhandled rejection, xpan gracefully shutting down!!!');
    }
    app.close(() => {
      throw new PromiseError();
    });
  });
}

module.exports = {
  unhandledRejection,
};
