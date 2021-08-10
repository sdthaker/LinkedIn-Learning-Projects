const morgan = require('morgan')
const logger = require('./logger')

const format = ':requestId: :method :url :status :response-time ms';

morgan.token('requestId', req => req.id);

const options = {
    stream: {
        write: message => logger.info(message.trim()),
    },
};

module.exports = morgan(format, options)