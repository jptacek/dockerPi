"use strict";

module.exports = function(app){
    const piCalc = require('./controllers/nodePiApi');
    app.get('/pi/:iterations', piCalc.calcPiApi);
};
