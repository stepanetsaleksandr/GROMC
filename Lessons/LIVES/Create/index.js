const baseUrl = 'https://61ba094948df2f0017e5a8b2.mockapi.io/api/v1/users';

const submitButton = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');

const onInput = () => {
  if (!loginForm.reportValidity()) {
    submitButton.setAttribute('disabled', true);
  } else {
    submitButton.removeAttribute('disabled');
  }
};

const onSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(loginForm)].reduce(
    (acc, [prop, value]) => ({ ...acc, [prop]: value }),
    {},
  );
  const sendingData = JSON.stringify(formData);

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: sendingData,
  })
    .then(response => response.json())
    .then(user => {
      alert(JSON.stringify(user));
      loginForm.reset();
    });
};

loginForm.addEventListener('input', onInput);
loginForm.addEventListener('submit', onSubmit);
