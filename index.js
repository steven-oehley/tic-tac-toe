// Array to keep track of moves in the Tic Tac Toe game
const moves = ["", "", "", "", "", "", "", "", ""];
// Current player ("x" or "o")
let player = "x";
// Number of moves made
let numMoves = 0;
// Flag to check if the game is still active
let gameActive = true;

// Function to check if a player has won
const checkWin = (moveIndex) => {
  // Check if the winning cell is not empty
  if (moves[moveIndex] !== "") {
    // Get the winning message element
    const winningMessage = document.getElementById("win");
    // Get the winning player
    const winningMove = moves[moveIndex];
    // Display the winning message
    winningMessage.innerHTML = `${winningMove} wins! 🥳`;
    // Set the game as inactive
    gameActive = false;
  }
};

// Function to track the score and check for a winner or draw
const trackScore = () => {
  // Winning conditions for Tic Tac Toe
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  // Check each winning condition
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];

    if (moves[a] !== null && moves[a] === moves[b] && moves[b] === moves[c]) {
      checkWin(a);
      return; // Return to exit the function after a win is found
    }
  }

  // Check if all cells are filled (no winner)
  if (moves.every((move) => move !== "")) {
    document.getElementById("win").innerHTML =
      "No winner 🥲, reset board for a new game";
  }
};

// Event listener for cell clicks on the board
const board = document.querySelector(".board");
board.addEventListener("click", (e) => {
  // Get the clicked cell
  const cell = document.getElementById(e.target.id);

  // Check if the cell is empty and the game is still active
  if (!cell.innerHTML && gameActive) {
    // Set the current player's symbol in the cell
    cell.innerHTML = player;
    // Toggle the "active" class for styling
    cell.classList.toggle("active");
    // Update the moves array with the player's move
    moves[cell.dataset.index] = player;
    // Switch to the next player
    player = player === "x" ? "o" : "x";
    // Increment the number of moves
    numMoves++;

    // Check for a winner or draw after 5 moves
    if (numMoves >= 5) {
      trackScore();
    } else {
      // Display message for ongoing game
      document.getElementById("win").innerHTML = "Good Luck Players! 👏";
    }
  } else if (!gameActive) {
    // Do nothing if the game is not active
    return;
  } else {
    // Display message for selecting an invalid cell
    const winMessage = document.getElementById("win");
    winMessage.innerHTML = "🚫Invalid Cell, select an empty cell!";
  }
});

// Event listener for the reset button
const rstBtn = document.getElementById("reset");
rstBtn.addEventListener("click", () => {
  // Reset all cells, remove "active" class, and reset moves array
  const cells = document.querySelectorAll(".board .row div");
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.classList.remove("active");
  });
  moves.fill("");
  // Reset number of moves, display start message, and set player to "x"
  numMoves = 0;
  document.getElementById("win").innerHTML = "Click a cell to start!";
  player = "x";
  // Set the game as active
  gameActive = true;
});
