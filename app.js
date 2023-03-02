// Global Variables

let gameState = "playerOne";
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

// Populate The Screen

addCellsToScren();

// Start Game Function

function startGame() {
  const oldCells = document.querySelectorAll(".grid-cell");

  // Removes the old cells
  oldCells.forEach((element) => {
    element.remove();
  });

  addCellsToScren(); // Repopulates the screen with new cells
  gameState = "playerOne"; // Changes the game state
}

// Start/Restart Button Functionality

const startButton = document.querySelector("#start");

startButton.addEventListener("click", function () {
  startGame();
});
