// javascript code goes here
let player = 1; // 1 for Player1 and 2 for Player2
let grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0 for empty, 1 for Player1 and 2 for Player2

for (let i = 1; i <= 9; i++) {
  let button = document.getElementById(i.toString());
  button.addEventListener("click", function() {
    if (grid[i - 1] === 0) {
      grid[i - 1] = player;
      if (player === 1) {
        button.innerHTML = "X";
        player = 2;
      } else {
        button.innerHTML = "O";
        player = 1;
      }
    }
    checkWin();
  });
}

function checkWin() {
  // check for horizontal win
  for (let i = 0; i <= 6; i += 3) {
    if (grid[i] === grid[i + 1] && grid[i + 1] === grid[i + 2] && grid[i] !== 0) {
      gameOver(grid[i]);
    }
  }
  // check for vertical win
  for (let i = 0; i <= 2; i++) {
    if (grid[i] === grid[i + 3] && grid[i + 3] === grid[i + 6] && grid[i] !== 0) {
      gameOver(grid[i]);
    }
  }
  // check for diagonal win
  if (grid[0] === grid[4] && grid[4] === grid[8] && grid[0] !== 0) {
    gameOver(grid[0]);
  }
  if (grid[2] === grid[4] && grid[4] === grid[6] && grid[2] !== 0) {
    gameOver(grid[2]);
  }
  checkDraw();
}

function checkDraw() {
  let filled = true;
  for (let i = 0; i < 9; i++) {
    if (grid[i] === 0) {
      filled = false;
      break;
    }
  }
  if (filled) {
    gameOver(0);
  }
}

function gameOver(winner) {
  if (winner === 1) {
    alert("Congratulations! Player1 wins");
  } else if (winner === 2) {
    alert("Congratulations! Player2 wins");
  } else {
    alert("Draw!");
  }
}