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

const onSearchUser = async () => {
  showSpinner();
  cleanReeposList();
  const userName = inputElem.value;

  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    reposList.forEach(repos => {
      addItem(repos.name);
    });
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};

buttonElem.addEventListener('click', onSearchUser);
