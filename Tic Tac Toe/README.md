# ❌ Tic Tac Toe Game ⭕

## Overview

This is a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript. The game features a dynamic messaging system that updates players on the game state, prevents entries after a win, includes dynamic styling with the toggling of an active class, and provides a reset button to restart the game.

## Features

1. **Dynamic Messaging System 📝:**

   - The game includes a dynamic messaging system that updates players on the game state. Messages change after a win, on an invalid move, or when the game is in progress.

2. **Preventing Entries After a Win 🚫:**

   - After a player wins the game, no further entries can be made. This prevents accidental moves that could disrupt the game after it has concluded.

3. **Dynamic Styling and Active Class 🎨:**

   - The game employs dynamic styling by toggling an active class on and off. When a player makes a move, the corresponding cell receives the active class, providing a visual indicator of the active player's move. The active class is removed after a win or when the game is reset.

4. **Reset Button ✅:**
   - The game provides a "Reset" button that allows players to start a new game at any point. Clicking the button resets the game board, returns the game state to active, and sets the player's move back to "X."

## How to Play

1. **Click on a Cell:**

   - To make a move, click on an empty cell on the game board.

2. **Winning the Game:**

   - The game ends when a player successfully aligns three of their symbols (X or O) either horizontally, vertically, or diagonally.

3. **Dynamic Messages:**

   - Messages at the top of the game board dynamically update to inform players of the current game state, including win messages, ongoing game messages, and invalid move messages.

4. **Reset Button:**
   - To start a new game, click the "Reset" button. This clears the board, resets the game state to active, and sets the first move to "X."

## Technologies Used 👨‍💻

- HTML
- CSS
- JavaScript

## Credits

- This game was created by me as part of the [Covalence](https://covalence.io/) Intro to Web Projects.
