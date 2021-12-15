function finishList() {
  const ul = document.querySelector('ul');

  const elem1 = document.createElement('li');
  elem1.textContent = '1';
  ul.prepend(elem1);

  const specialItem = document.querySelector('.special');

  const elem4 = document.createElement('li');
  elem4.textContent = '4';
  specialItem.before(elem4);

  const elem6 = document.createElement('li');
  elem6.textContent = '6';
  specialItem.after(elem6);

  const elem8 = document.createElement('li');
  elem8.textContent = '8';
  ul.append(elem8);
}
