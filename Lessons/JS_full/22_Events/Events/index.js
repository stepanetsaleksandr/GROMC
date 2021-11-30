const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandler = document.querySelector('.remove-handlers-btn');
const attachHandler = document.querySelector('.attach-handlers-btn');

const logTaget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color:${color}; margin-left: 8px;">${text}</span>`;
};
const clearTaget = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};

const logGreenDiv = logTaget.bind(null, 'DIV', 'green');
const logGreenP = logTaget.bind(null, 'P', 'green');
const logGreenSpan = logTaget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTaget.bind(null, 'DIV', 'grey');
const logGreyP = logTaget.bind(null, 'P', 'grey');
const logGreySpan = logTaget.bind(null, 'SPAN', 'grey');

const logStop = stop.bind(null);

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

removeHandler.addEventListener('click', event => event.stopPropagation());

attachHandler.removeEventListener('click', event => event.stopPropagation());

const clean = clearTaget.bind(null);
clearBtn.addEventListener('click', clean);
