"use strict";

let logger = require('./../shared/winstonLogger');

function calcPi(req, res) {
  logger.debug('');
    logger.debug('Calc Pi');
    let pi =0;
    let iterations = req.params.iterations;
    logger.debug('Iterations: '+iterations);
      res.setHeader('Content-Type', 'application/json');
      pi = 3.141;
      res.setHeader('Access-Control-Allow-Origin', '*');
     res.send('{"pi":' + pi +'}');
}

exports.calcPi = calcPi;
