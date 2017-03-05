'use strict';

const express = require('express');
const os = require("os");

const app = express();
const hostname = os.hostname();
// Constants
const PORT = 3000;

// App
app.get('/', function (req, res) {
  res.send('<html><body>Hello from Node.js container ' + hostname + '</body></html>');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT +' container: ' +hostname);
