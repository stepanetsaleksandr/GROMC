const createMessanger = () => {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(name) {
    sender = name;
  }

  return {
    sendMessage, // sendMessage: sendMessage,
    setMessage, // setMessage: setMessage,
    setSender,
  };
};

export default createMessanger;

const messenger1 = createMessanger();
