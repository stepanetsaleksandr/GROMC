const baseUrl = 'https://61ba094948df2f0017e5a8b2.mockapi.io/api/v1/users';

const submitButton = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');

const onInput = () => {
  // const isValidForm = loginForm.reportValidity();
  // if (!isValidForm) {
  //   submitButton.setAttribute('disabled', true);
  // } else {
  //   submitButton.removeAttribute('disabled');
  // }

  submitButton.setAttribute('disabled', !loginForm.reportValidity());
};

const sendData = () => {
  const formData = [...new FormData(loginForm)].reduce(
    (acc, [prop, value]) => ({ ...acc, [prop]: value }),
    {},
  );

  const sendingData = JSON.stringify(formData);

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
