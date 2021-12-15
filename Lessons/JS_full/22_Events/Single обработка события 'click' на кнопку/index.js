const singleBtn = document.querySelector('.single-use-btn');

const handler = () => {
  console.log('clicked');
  singleBtn.removeEventListener('click', handler);
};

singleBtn.addEventListener('click', handler);
