const app_root = __dirname;
const express = require("express");
const bodyParser = require('body-parser');
const logger = require('express-logger');
const http = require('http');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express["static"](app_root));

const server = http.createServer(app);

server.listen(app.get('port'), function() {
  console.log(`Express server listening on port ${(app.get('port'))}`);
});
