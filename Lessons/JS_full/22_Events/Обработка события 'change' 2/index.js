const inputElem = document.querySelector('.text-input');

const handler = event => {
  const text = event.target.value;
  console.log(text);
};

inputElem.addEventListener('change', handler);
