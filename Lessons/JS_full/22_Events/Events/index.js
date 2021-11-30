const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandledsBtn = document.querySelector('.remove-handlers-btn');

const logTarget = (text, color) => {
  const eventListElem = document.querySelector('.events-list');
  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const clearTarget = () => {
  const eventListElem = document.querySelector('.events-list');
  eventListElem.innerHTML = ``;
};

const clean = clearTarget.bind(null);
clearBtn.addEventListener('click', clean);

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGrayDiv = logTarget.bind(null, 'DIV', 'gray');
const logGrayP = logTarget.bind(null, 'P', 'gray');
const logGraySpan = logTarget.bind(null, 'SPAN', 'gray');

divElem.addEventListener('click', logGrayDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGrayP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGraySpan, true);
spanElem.addEventListener('click', logGreenSpan);
