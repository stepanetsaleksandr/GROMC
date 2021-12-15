let message = 'Just learn it';

export function sendMessage(name) {
  // eslint-disable-next-line no-useless-concat
  console.log(`${name}, ${message}` + '! Your Gromcode');
}

export function setMessage(text) {
  message = text;
}

setMessage('Good job');
sendMessage('Ann');
