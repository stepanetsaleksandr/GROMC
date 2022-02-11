// /* eslint-disable */

// LEX ENV
// {
//   enviromentRecord{
//   'message': 'Test',
//   'weight' : 55,
//   'run': {
//     console.log('RUN');
//   },
//   'createMessenger()': {.. }
//   'messanger': ....
// ...
// },

//   'outerLexicalEnv': ...
// }

// createMessenger LEX ENV
// {
//   enviromentRecord{
//     'message': ...,
//     'sender': ...,
//     'sendMessage': ...,
//     ...
//     'outerLexicalEnv': global
// }

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

// in: none
// out: obj
function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
run();
