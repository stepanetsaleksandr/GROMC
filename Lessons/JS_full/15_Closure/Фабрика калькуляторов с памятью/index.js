export const createCalculator = () => {
  let memory = 0;

  function add(num) {
    memory += num;
  }

  function decrease(num) {
    memory -= num;
  }

  function reset() {
    memory = 0;
  }

  const getMemo = () => memory;

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
