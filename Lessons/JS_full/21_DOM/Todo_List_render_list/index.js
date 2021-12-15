'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = listItems => {
  const listElem = document.querySelector('.list');

  const listItemElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li'); // take a list
      listItemElem.classList.add('list__item'); // add list item into list
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input'); // create input
      checkboxElem.setAttribute('type', 'checkbox'); // set atributes
      // checkboxElem.setAttribute('checked', done); // set atributes
      checkboxElem.checked = done;

      checkboxElem.classList.add('list__item-checkbox'); // add class
      listItemElem.append(checkboxElem, text); // add text from array

      return listItemElem;
    });

  listElem.append(...listItemElems);
};

renderTasks(tasks);
