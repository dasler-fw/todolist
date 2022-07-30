import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Board from './src/components/Board';

const BoardInst = new Board();

document.body.innerHTML = BoardInst.render();

const addBoardButton = document.getElementById('addBoard')

addBoardButton.addEventListener('click', () => {
  BoardInst.addBoard();
});
