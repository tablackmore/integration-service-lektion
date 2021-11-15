const winston = require('winston');
require('winston-daily-rotate-file');
const { name } = require('../../package.json');

// For more information https://github.com/winstonjs/winston
module.exports = winston.createLogger({
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.errors({ stack: true }),
        winston.format.printf(
          (info) => `${info.filename || ''} [${info.level}]: ${info.message} ${info.stack || ''}`
        )
      )
    }),
    new winston.transports.DailyRotateFile({
      level: 'warn',
      filename: `logs/${name}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD-HH',
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
});
