const checkElem = document.querySelector('.task-status');

const handler = () => {
  const text = checkElem.checked;
  console.log(text);
};

checkElem.addEventListener('change', handler);
