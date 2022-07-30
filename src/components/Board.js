import './style.scss';
import TaskList from './TaskList';

export default class Board {
  boardCount = 0;

  addBoard() {
    this.boardCount++;

    const boardsElem = document.getElementById('boards'); // container for all boards
    const newBoard = document.createElement('div');
    const input = document.getElementById('boardInput') // board name input
    const title = document.createElement('div');

    title.innerText = `Board: ${input.value}`;
    title.classList.add('title');

    newBoard.classList.add('board', 'border');
    newBoard.appendChild(title);

    const TaskInst = new TaskList({ boardCount: this.boardCount });

    newBoard.insertAdjacentHTML('beforeend', TaskInst.render());
    boardsElem.appendChild(newBoard);

    const addTaskBtn = document.getElementById(`addTask${this.boardCount}`);

    addTaskBtn.addEventListener('click', () => {
      TaskInst.addTask();
    });

    input.value = "";
  }

  render() {
    return `
      <div class="header">
        <div class="app-name">Todo-List App</div>
        <div class="control-panel">
          <input id="boardInput" class="form-control w-100 mx-3"/>
          <button id="addBoard" class="btn btn-primary w-50">Add board</button>
        </div>
      </div>
      <div id="boards" class="boardsContainer" />
    `
  }
}
