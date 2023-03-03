// Global Variables

let gameState = "playerOne";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameStatus = document.getElementById("game-status");

// Add Create Cells

const gameGrid = document.getElementById("game-grid");

function createCell(value) {
  const div = document.createElement("div");
  div.classList = "grid-cell";
  div.innerText = value;

  gameGrid.append(div);
}

// Add Cells To Screen

function addCellsToScren() {
  gameBoard.forEach((element) => {
    createCell(element);
  });
}

// Start Game Function

function startGame() {
  const oldCells = document.querySelectorAll(".grid-cell");

  // Removes the old cells
  oldCells.forEach((element) => {
    element.remove();
  });

  addCellsToScren(); // Repopulates the screen with new cells
  gameState = "playerOne"; // Changes the game state
  gameStatus.innerText = "Player One Turn"; // Changes game status bar
  gridCellClickedFunctionality(); // Cell Clicked Functionality
}

// Start/Restart Button Functionality

const startButton = document.getElementById("start");

startButton.addEventListener("click", function () {
  startGame();
});

// Grid Cell Clicked

function gridCellClickedFunctionality() {
  const gridCells = document.querySelectorAll(".grid-cell"); // Create The Grid Cells

  gridCells.forEach((element) => {
    element.addEventListener("click", function () {
      if (gameState === "playerOne") {
        if (element.innerText === "") {
          element.innerText = "X";
          gameStatus.innerText = "Player Two Turn";
          gameState = "playerTwo";
        }
      } else if (gameState === "playerTwo") {
        if (element.innerText === "") {
          element.innerText = "O";
          gameStatus.innerText = "Player One Turn";
          gameState = "playerOne";
        }
      }
    });
  });
}

// Initial Functions Calls

addCellsToScren();
gridCellClickedFunctionality();
