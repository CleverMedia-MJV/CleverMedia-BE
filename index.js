require('dotenv').config();
// websocket, db
const http = require('http');
const { PORT } = require('./config/constants').constants;
const App = require('./Main');

const httpServer = http.createServer(App);

const spinServer = async function (server) {
  const main = server.listen(PORT);
};

spinServer(httpServer);
