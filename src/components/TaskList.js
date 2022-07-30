import './style.scss';

export default class TaskList {
  constructor(opt) {
    this.boardCount = opt.boardCount;
    this.setListener.bind(this);
  }

  setListener = (task) => {
    task.addEventListener('click', () => {
      if (task.classList.contains('line-through')) {
        task.classList.remove('line-through');
      } else {
        task.classList.add('line-through');
      }
    });
  };

  addTask() {
    const tasksElem = document.getElementById(`tasks${this.boardCount}`);
    const newTask = document.createElement('div');
    const input = document.getElementById(`taskInput${this.boardCount}`)

    newTask.classList.add('task'); // add default class
    newTask.innerText = input.value; // fill task container with task text

    this.setListener(newTask); // for adding or removing line-through classes

    tasksElem.appendChild(newTask)
    input.value = ""; // reset input
  }

  render() {
    return `
     <div class="taskContainer">
        <div class="d-flex mb-5">
            <input id="taskInput${this.boardCount}" class="form-control w-100 mx-3" />
            <button id="addTask${this.boardCount}" class="btn btn-primary w-50 mx-3">Add task</button>
        </div>

        <div id="tasks${this.boardCount}" class="tasksContainer" />
      </div>
    `
  }
}
