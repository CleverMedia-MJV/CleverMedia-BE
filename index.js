require('dotenv').config();
// websocket, db, process errs
const http = require('http');
const { PORT } = require('./config/constants').constants;
const {
  unhandledRejection,
  uncaughtExceptions,
} = require('./src/errors/exceptions');

require('./config/database').connect();

uncaughtExceptions();
const App = require('./Main');

const httpServer = http.createServer(App);

const spinServer = async function (server) {
  const main = server.listen(PORT);
  unhandledRejection(main);
};

spinServer(httpServer);
