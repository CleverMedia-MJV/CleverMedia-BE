require('dotenv').config();
// websocket, db, process errs
const http = require('http');
const connectDB = require('./src/db/setup/connectDB');
const { PORT } = require('./config/constants').constants;
const {
  unhandledRejection,
  uncaughtExceptions,
} = require('./src/errors/exceptions');

uncaughtExceptions();
const App = require('./Main');

const httpServer = http.createServer(App);

const spinServer = async function (server) {
  connectDB();
  const main = server.listen(PORT);
  unhandledRejection(main);
};

spinServer(httpServer);
