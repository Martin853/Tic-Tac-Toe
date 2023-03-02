// Gameboard Array

let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Add Create Cells

const gameGrid = document.querySelector("#game-grid");

function createCell(value) {
  const div = document.createElement("div");
  div.classList = "grid-cell";
  div.innerHTML = value;

  gameGrid.append(div);
}

// Add Cells To Screen

function addCellsToScren() {
  gameBoard.forEach((element) => {
    createCell(element);
  });
}

addCellsToScren();
