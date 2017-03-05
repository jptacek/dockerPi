"use strict";

const logger = require('./../shared/winstonLogger');

const piCalc = require('./../shared/piCalc');


function calcPiApi(req, res) {
  logger.debug('');
    logger.debug('Calc Pi');
    let piJson =0;
    const iterations = req.params.iterations;
    logger.debug('Iterations: '+iterations);
      res.setHeader('Content-Type', 'application/json');
      piJson= piCalc.calcPi(iterations);
      res.setHeader('Access-Control-Allow-Origin', '*');
     res.send(piJson);
}

exports.calcPiApi = calcPiApi;
