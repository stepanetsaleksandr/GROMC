/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
/* eslint-disable default-case */
/* eslint-disable no-unreachable */
function createLogger() {
  let arrLog = [];
  function warn(message) {
    arrLog.push({
      message: message,
      dateTime: new Date(),
      type: 'warn',
    });
  }
  function error(message) {
    arrLog.push({
      message: message,
      dateTime: new Date(),
      type: 'error',
    });
  }
  function log(message) {
    arrLog.push({
      message: message,
      dateTime: new Date(),
      type: 'log',
    });
  }
  function getRecords(type) {
    if (type === undefined) return arrLog.sort((log1, log2) => log2.dateTime - log1.dateTime);
    if (type !== 'warn' && type !== 'error' && type !== 'log' && type !== undefined) return [];
    switch (type) {
      case 'warn':
        return arrLog
          .filter(logger => logger.type === 'warn')
          .sort((log1, log2) => log1.dateTime - log2.dateTime);
        break;
      case 'error':
        return arrLog
          .filter(logger => logger.type === 'error')
          .sort((log1, log2) => log2.dateTime - log1.dateTime);
        break;
      case 'log':
        return arrLog
          .filter(logger => logger.type === 'log')
          .sort((log1, log2) => log2.dateTime - log1.dateTime);
        break;
    }
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
console.log(logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
