const inputElem = document.querySelector('.text-input');

const handler = () => {
  const text = inputElem.value;
  console.log(text);
};

inputElem.addEventListener('change', handler);
