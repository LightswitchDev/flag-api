import pino from 'pino';
import expressPino from 'express-pino-logger';

const logger = pino({
  name: process.env.APP_ID || 'lightswitch-api',
  level: process.env.LOG_LEVEL || 'info',
});

const loggerMiddleware = expressPino(logger);
export { logger, loggerMiddleware };
