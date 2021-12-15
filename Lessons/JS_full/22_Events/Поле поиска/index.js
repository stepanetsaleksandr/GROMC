const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

const handler = () => {
  const text = searchInput.value;
  console.log(text);
};

searchBtn.addEventListener('click', handler);
