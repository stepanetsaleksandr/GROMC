const listElem = document.querySelector('.list');
const createBtn = document.querySelector('.btn');
const addingText = document.querySelector('.task-input');

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

// EVENTS
// 1. add event to element
// 2. create event handlers
// list
// click
renderTasks(tasks);

// algo
// get task id
// find task by id
// update task
// re-render

// function updateTaskHendler(event) {
//   // console.dir(event.target.classList.contains('list__item-checkbox'));
//   // console.dir(event.target.getAttribute('list__item-checkbox'));
//   if (!event.target.classList.contains('list__item-checkbox')) {
//     return;
//   }
//   const { id } = event.target.dataset;
//   console.log(event.target.dataset.id); // находим id таски
//   // event.target.dataset.id
// }

function updateTaskHendler(event) {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const task = tasks.find(el => el.id === Number(event.target.dataset.id));
  task.done = !task.done;

  renderTasks(tasks);
}

const res = listElem.addEventListener('click', updateTaskHendler);

// callback
// input
// out

// WEB FLOW
// 1. get data
// 2. render
// 3. update data, dont update DOM
// 4. re-render

/// ADD NEW TASK ///
// function addTaskHendler() {
//   if (addingText.value) {
//     tasks.push({ id: tasks.length, text: addingText.value, done: false });
//   }
//   addingText.value = '';
//   renderTasks(tasks);
// }

// createBtn.addEventListener('click', addTaskHendler);

// algo
// 1 get text
// 2 create task
// 3 update task
// 4 render

// function addTaskHendler() {
//   renderTasks(tasks);
// }

// createBtn.addEventListener('click', addTaskHendler);
