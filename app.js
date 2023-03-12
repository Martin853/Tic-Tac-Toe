// Global Variables

let gameState = "playerOne";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameStatus = document.getElementById("game-status");
const gameGrid = document.getElementById("game-grid");

// Game Factory Function

function game() {
  // Add Create Cells

  const createCell = function (value) {
    const div = document.createElement("div");
    div.classList = "grid-cell";
    div.innerText = value;

    gameGrid.append(div);
  };

  // Add Cells To Screen

  const addCellsToScreen = function () {
    gameBoard.forEach((element) => {
      gameFunctionality.createCell(element);
    });
  };

  // Start Game Function

  const startGame = function () {
    const oldCells = document.querySelectorAll(".grid-cell");

    // Removes the old cells
    oldCells.forEach((element) => {
      element.remove();
    });

    game.addCellsToScreen(); // Repopulates the screen with new cells
    gameState = "playerOne"; // Changes the game state
    gameStatus.innerText = "Player One Turn"; // Changes game status bar
    gridCellClickedFunctionality(); // Cell Clicked Functionality
  };

  return { createCell, addCellsToScreen, startGame };
}

const gameFunctionality = game();

// Start/Restart Button Functionality

const startButton = document.getElementById("start");

startButton.addEventListener("click", function () {
  game.gameFunctionalitystartGame();
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
          checkDraw();
          checkWin("X");
        }
      } else if (gameState === "playerTwo") {
        if (element.innerText === "") {
          element.innerText = "O";
          gameStatus.innerText = "Player One Turn";
          gameState = "playerOne";
          checkDraw();
          checkWin("O");
        }
      }
    });
  });
}

// Check Win

function checkWin(value) {
  const gameCells = document.querySelector("#game-grid").childNodes;

  // Pattern 1

  if (
    gameCells[0].innerText === value &&
    gameCells[1].innerText === value &&
    gameCells[2].innerText === value
  ) {
    gameState = "";
    if (value === "X") {
      gameStatus.innerText = "Player One Won";
    } else if (value === "O") {
      gameStatus.innerText = "Player Two Won";
    }
  }

  // Pattern 2

  if (
    gameCells[3].innerText === value &&
    gameCells[4].innerText === value &&
    gameCells[5].innerText === value
  ) {
    gameState = "";
    if (value === "X") {
      gameStatus.innerText = "Player One Won";
    } else if (value === "O") {
      gameStatus.innerText = "Player Two Won";
    }
  }

  // Pattern 3

  if (
    gameCells[6].innerText === value &&
    gameCells[7].innerText === value &&
    gameCells[8].innerText === value
  ) {
    gameState = "";
    if (value === "X") {
      gameStatus.innerText = "Player One Won";
    } else if (value === "O") {
      gameStatus.innerText = "Player Two Won";
    }
  }

  // Pattern 4

  if (
    gameCells[0].innerText === value &&
    gameCells[3].innerText === value &&
    gameCells[6].innerText === value
  ) {
    gameState = "";
    if (value === "X") {
      gameStatus.innerText = "Player One Won";
    } else if (value === "O") {
      gameStatus.innerText = "Player Two Won";
    }
  }

  // Pattern 5

  if (
    gameCells[1].innerText === value &&
    gameCells[4].innerText === value &&
    gameCells[7].innerText === value
  ) {
    gameState = "";
    if (value === "X") {
      gameStatus.innerText = "Player One Won";
    } else if (value === "O") {
      gameStatus.innerText = "Player Two Won";
    }
  }

  // Pattern 6

  if (
    gameCells[2].innerText === value &&
    gameCells[5].innerText === value &&
    gameCells[8].innerText === value
  ) {
    gameState = "";
    if (value === "X") {
      gameStatus.innerText = "Player One Won";
    } else if (value === "O") {
      gameStatus.innerText = "Player Two Won";
    }
  }

  // Pattern 7

  if (
    gameCells[0].innerText === value &&
    gameCells[4].innerText === value &&
    gameCells[8].innerText === value
  ) {
    gameState = "";
    if (value === "X") {
      gameStatus.innerText = "Player One Won";
    } else if (value === "O") {
      gameStatus.innerText = "Player Two Won";
    }
  }

  // Pattern 8

  if (
    gameCells[2].innerText === value &&
    gameCells[4].innerText === value &&
    gameCells[6].innerText === value
  ) {
    gameState = "";
    if (value === "X") {
      gameStatus.innerText = "Player One Won";
    } else if (value === "O") {
      gameStatus.innerText = "Player Two Won";
    }
  }
}

// Check Draw

function checkDraw() {
  const gameCells = document.querySelector("#game-grid").childNodes;

  if (
    gameCells[0].innerText !== "" &&
    gameCells[1].innerText !== "" &&
    gameCells[2].innerText !== "" &&
    gameCells[3].innerText !== "" &&
    gameCells[4].innerText !== "" &&
    gameCells[5].innerText !== "" &&
    gameCells[6].innerText !== "" &&
    gameCells[7].innerText !== "" &&
    gameCells[8].innerText !== ""
  ) {
    gameState = "";
    gameStatus.innerHTML = "Game ended in a draw";
  }
}

// Initial Functions Calls

gameFunctionality.addCellsToScreen();
gridCellClickedFunctionality();
