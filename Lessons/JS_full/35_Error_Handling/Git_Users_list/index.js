import { addItem, cleanReeposList } from './repos.js';
import { fetchRepositories, fetchUserData } from './gateways.js';
import { hideSpinner, showSpinner } from './spinner.js';
import { renderUserData } from './user.js';

const defaultAvatar = 'https:/avatars3.githubusercontent.com/u10001';
const defaultUser = {
  avatar_url: defaultAvatar,
  name: '',
  location: '',
};

renderUserData(defaultUser);
const buttonElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  cleanReeposList();
  const userName = inputElem.value;
  fetchUserData(userName)
    .then(user => {
      renderUserData(user);
      return user.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(repos => {
      repos.forEach(el => {
        addItem(el.name);
      });
    })
    .catch(err => {
      alert('Failed to load data');
    })
    .finally(() => {
      hideSpinner();
    });
};

buttonElem.addEventListener('click', onSearchUser);
