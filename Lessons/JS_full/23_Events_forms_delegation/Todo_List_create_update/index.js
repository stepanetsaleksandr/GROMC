const tasks = [
  { id: 0, text: 'Buy milk', done: false },
  { id: 1, text: 'Pick up Tom from airport', done: false },
  { id: 2, text: 'Visit party', done: false },
  { id: 3, text: 'Visit doctor', done: true },
  { id: 4, text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li'); // create li
      listItemElem.classList.add('list__item'); // add class for li

      const checkbox = document.createElement('input'); // create input
      checkbox.setAttribute('type', 'checkbox'); // set type checkbox
      checkbox.setAttribute('data-id', text); // set data- id
      checkbox.checked = done; // set done from tasks array
      checkbox.classList.add('list__item-checkbox'); // set class for checkbox

      if (done) {
        listItemElem.classList.add('list__item_done'); // if (done=true) add class done
      }
      listItemElem.append(checkbox, text); // insert checkbox and text into list

      return listItemElem; // render list line
    });

  listElem.append(...tasksElems); // add list lines into board
};

/// ADD NEW TASK ///
const createBtn = document.querySelector('.btn');

const addTask = () => {
  const addingText = document.querySelector('.task-input').value;

  if (addingText) {
    tasks.push({ id: tasks.length, text: addingText, done: false });
  }
  document.querySelector('.task-input').value = '';
  renderTasks(tasks);
};

/// CHANGE DONE ///
const changeCheck = event => {
  const check = event.target.dataset.id;

  if (!check) return;

  const checkDone = tasks.find(el => el.text === check);

  if (checkDone.done) {
    checkDone.done = false;
  } else {
    checkDone.done = true;
  }
  renderTasks(tasks);
};

listElem.addEventListener('click', changeCheck);

createBtn.addEventListener('click', addTask);
renderTasks(tasks);
