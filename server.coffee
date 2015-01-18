app_root = __dirname
express = require "express"
bodyParser = require 'body-parser'
logger = require 'express-logger'
http = require 'http'
favicon = require 'serve-favicon'
app = express()

app.set 'port', process.env.PORT || 3000
app.use favicon("images/favicon.png")
app.use express.static(app_root)

server = http.createServer(app)

server.listen app.get('port'), ->
    console.log "Express server listening on port #{app.get('port')}"
