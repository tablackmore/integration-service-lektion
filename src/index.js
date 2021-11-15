const logger = require('./utils/logger');
const { add } = require('./utils/example');

// Example of using logging
// Where logs are written to both console and file in logs
logger.debug(`Debug log: ${add(5, 6)}`);
logger.info('Info log text');
logger.warn('Warning log text');
try {
  throw new Error('Example error');
} catch (error) {
  logger.error(error);
}
