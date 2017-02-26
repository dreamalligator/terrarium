(function() {
  var app, app_root, bodyParser, express, http, logger, server;

  app_root = __dirname;
  express = require("express");
  bodyParser = require('body-parser');
  logger = require('express-logger');
  http = require('http');
  app = express();

  app.set('port', process.env.PORT || 3000);
  app.use(express["static"](app_root));

  server = http.createServer(app);

  server.listen(app.get('port'), function() {
    return console.log("Express server listening on port " + (app.get('port')));
  });
}).call(this);
