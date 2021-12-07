document.addEventListener('DOMContentLoaded', startGame)

// The board object contains all of the cell objects and their properties
// Each cell has a row, column, isMine, and hidden property
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: randTrueOrFalse(),
      hidden: true,
      surroundingMines: 0,
      isMarked: false
    },
    {
      row: 1,
      col: 0,
      isMine: randTrueOrFalse(),
      hidden: true,
      surroundingMines: 0,
      isMarked: false
    },
    {
      row: 2,
      col: 0,
      isMine: randTrueOrFalse(),
      hidden: true,
      surroundingMines: 0,
      isMarked: false
    },
    {
      row: 0,
      col: 1,
      isMine: randTrueOrFalse(),
      hidden: true,
      surroundingMines: 0,
      isMarked: false
    },
    {
      row: 1,
      col: 1,
      isMine: randTrueOrFalse(),
      hidden: true,
      surroundingMines: 0,
      isMarked: false
    },
    {
      row: 2,
      col: 1,
      isMine: randTrueOrFalse(),
      hidden: true,
      surroundingMines: 0,
      isMarked: false
    },
    {
      row: 0,
      col: 2,
      isMine: randTrueOrFalse(),
      hidden: true,
      surroundingMines: 0,
      isMarked: false
    },
    {
      row: 1,
      col: 2,
      isMine: randTrueOrFalse(),
      hidden: true,
      surroundingMines: 0,
      isMarked: false
    },
    {
      row: 2,
      col: 2,
      isMine: randTrueOrFalse(),
      hidden: true,
      surroundingMines: 0,
      isMarked: false
    },
  ]
}

function randTrueOrFalse() {
  return random_boolean = Math.random() < 0.3;
}

function startGame() {

  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {

  for (let i = 0; i < board.cells.length; i++) {

    if (board.cells[i].isMine == true && board.cells[i].isMarked == true) {
    }
    else if (board.cells[i].isMine == false && board.cells[i].hidden == false) {
    }
    else {
      return;
    }

  }
  // You can use this function call to declare a winner (once you've
  lib.displayMessage('You won!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {

  count = 0;

  surrounding = lib.getSurroundingCells(cell.row, cell.col)

  for (let i = 0; i < surrounding.length; i++) {

    if (surrounding[i].isMine == true) {
      count++
    }

  }
  return count;
}