// 1. Пишем методы формирования обьектов лога
// 2. Все логи идут в один масив
// 3. Пишем метод вывода сообщений в зависимости от запроса
// 4. если в метод ничего не передано выводим весь масив
// 5. если нет такого типа лога, выводим пустой масив

function createLogger() {
  const memory = [];

  function warn(message) {
    memory.push({
      message,
      dateTime: new Date().getTime(),
      type: 'warn',
    });
  }

  function error(message) {
    memory.push({
      message,
      dateTime: new Date().getTime(),
      type: 'error',
    });
  }

  function log(message) {
    memory.push({
      message,
      dateTime: new Date().getTime(),
      type: 'log',
    });
  }

  // in: string
  // out: arrays of objects

  function getRecords(type) {
    let res = [];
    if (type) {
      res = memory.filter(log => log.type === type);
    }
    res = memory;
    return memory.sort((arg1, arg2) => arg2.dateTime - arg1.dateTime);

    // if (type === undefined) return memory.sort((arg1, arg2) => arg2.dateTime - arg1.dateTime); // если не передано значение возвращаем весь масив

    // если передано warn - сортируем масив по датам, фильтруем по типу worn
    // if (type === 'warn')
    //   return memory
    //     .sort((arg1, arg2) => arg1.dateTime - arg2.dateTime)
    //     .filter(log => log.type === 'warn');
    // if (type === 'error')
    //   return memory
    //     .sort((arg1, arg2) => arg2.dateTime - arg1.dateTime)
    //     .filter(log => log.type === 'error');
    // if (type === 'log')
    //   return memory
    //     .sort((arg1, arg2) => arg2.dateTime - arg1.dateTime)
    //     .filter(log => log.type === 'log');

    // return [];
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
logger.getRecords(); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger.getRecords('log'); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger.getRecords('error'); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger.getRecords('warn'); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
