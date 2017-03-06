"use strict";

let winston = require('winston');
winston.emitErrs = true;
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = './log';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const tsFormat = () => (new Date()).toLocaleTimeString();

let logger = new winston.Logger({
    transports: [
        new winston.transports.File({
           timestamp: tsFormat,
            level: 'debug',
            filename: './log/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            timestamp: tsFormat,
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
