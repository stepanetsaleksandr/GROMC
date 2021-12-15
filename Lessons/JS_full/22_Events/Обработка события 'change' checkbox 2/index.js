const checkElem = document.querySelector('.task-status');

const handler = event => {
  const text = event.target.checked;
  console.log(text);
};

checkElem.addEventListener('change', handler);
