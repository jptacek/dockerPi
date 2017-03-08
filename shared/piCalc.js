"use strict"

const logger = require('./winstonLogger');

function calcPi(iterations) {
    const radiusCircle = 5;
    let pointsIterated = 0;
    let pointsInsideCircle = 0;
    let calculatedPi = 0;
    const pi = 3.14159265359;

    for (var i = 0; i < iterations; i++) {
        pointsIterated++;

        var x = Math.random() * radiusCircle * 2 - radiusCircle;
        var y = Math.random() * radiusCircle * 2 - radiusCircle;

        // Calc x^2 + y^2 and determine if point in cirtlce
        if (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(radiusCircle, 2)) {
            pointsInsideCircle++;
        }
        calculatedPi = (4 * pointsInsideCircle / pointsIterated);

    }
    logger.debug(pointsInsideCircle + "/" + pointsIterated + " pi == " + calculatedPi);
    let piJson = '{"pi":' + calculatedPi + ',\r\n';
    piJson = piJson + '"iterations":' + iterations + ',\r\n';
    piJson = piJson + '"error":' + Math.abs(pi - calculatedPi) + ',\r\n';
    piJson = piJson + '"datetime": "' + new Date().toISOString() + '",\r\n';
    piJson = piJson + '"version": 1.5 \r\n';
    piJson = piJson + '}';
    return piJson;
}
exports.calcPi = calcPi;