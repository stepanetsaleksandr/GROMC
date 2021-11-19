// 1. Делаем из масива обьект для доступа по ключам
// 2. Для кждого елемента кидаем amount в total

const getTotalRevenue = transactions => {
  let total = 0;
  const obj = { ...transactions };
  Object.values(obj).forEach(el => {
    total += el.amount;
  });
  return total;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
