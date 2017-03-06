'use strict';

const express = require('express');
const os = require("os");

const app = express();
const hostname = os.hostname();
// Constants
const portDefault = 3000;
var PORT = process.env.PORT || portDefault;

require('./routes')(app);
const logger = require('./shared/winstonLogger');


// App
app.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js container ' + hostname + '</body></html>');
});

app.listen(PORT);

console.log ('Running on http://localhost:' + PORT +' container: ' +hostname);
logger.debug('Running on http://localhost:' + PORT +' container: ' +hostname);
