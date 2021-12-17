const baseUrl = 'https://61ba094948df2f0017e5a8b2.mockapi.io/api/v1/users'; //  урл сервера для запросов
const user = {};
// селекторы элементов формы
const emailInput = document.querySelector('input[name=email]'); // с именем email
const nameInput = document.querySelector('input[name=name]'); // с именем name
const passwordInput = document.querySelector('input[name=password]'); // с именем password
const submitButton = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form'); // элемент формы

const onInput = () => {
  const isValidForm = loginForm.reportValidity(); // возвращает true если все дочерние элементы прошли проверку
  if (!isValidForm) {
    submitButton.setAttribute('disabled', true); // если проверка не прошла кнопка неактивна
  } else {
    submitButton.removeAttribute('disabled'); // проверка прошла - кнопка активна
  }
};

const sendData = () => {
  // FormData создает новую форму из текущей, Object.fromEntries создает обьект с даными формы
  const formData = [...new FormData(loginForm)].reduce(
    (acc, [prop, value]) => ({ ...acc, [prop]: value }),
    {},
  );
  const sendingData = JSON.stringify(formData);
  // Передача данных на сервер и запись методом Post
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: sendingData,
  });
};

const onSubmit = event => {
  event.preventDefault();
  sendData()
    .then(response => response.json())
    .then(user => {
      alert(JSON.stringify(user));
      loginForm.reset();
    });
};

loginForm.addEventListener('input', onInput);
loginForm.addEventListener('submit', onSubmit);
