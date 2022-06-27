let isPlayerOne = true; // o

let gameState = {
  state: "no game",
  playerOnePos: [],
  playerTwoPos: [],
};

let winningStates = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const gameLogic = (squareId) => {
  document.getElementById(squareId).addEventListener("click", function () {
    if (
      document.getElementById(squareId).innerHTML ||
      gameState.state === "game over"
    ) {
      return;
    }
    if (isPlayerOne) {
      document.getElementById(squareId).innerHTML = "O";
      isPlayerOne = false;
      gameState.playerOnePos = [...gameState.playerOnePos, squareId]; //this is okay
      for (indexNo in winningStates) {
        let matches = 0;
        for (let n = 0; n < 3; n++) {
          if (gameState.playerOnePos.includes(winningStates[indexNo][n])) {
            matches++;
          }
          if (matches === 3) {
            gameState = { ...gameState, state: "game over" };

            document.getElementById("game-state").innerHTML =
              "<h2>Player Two WINS!</h2>";
          }
        }
      }
      document.getElementById("player").innerHTML = "<h2>Player Two</h2>";
    } else {
      document.getElementById(squareId).innerHTML = "X";
      isPlayerOne = true;
      gameState.playerTwoPos = [...gameState.playerTwoPos, squareId];
      for (indexNo in winningStates) {
        let matches = 0;
        for (let n = 0; n < 3; n++) {
          if (gameState.playerTwoPos.includes(winningStates[indexNo][n])) {
            matches++;
          }
          if (matches === 3) {
            gameState = { ...gameState, state: "game over" };
            document.getElementById("game-state").innerHTML =
              "<h2>Player Two WINS!</h2>";
          }
        }
      }
      document.getElementById("player").innerHTML = "<h2>Player One</h2>";
    }
    if (gameState.playerOnePos.length === 5) {
      state = "draw";
    }
  });
};

for (let i = 1; i < 10; i++) {
  gameLogic(i);
}

// gameLogic(1)
// gameLogic(2)
// gameLogic(3)
// gameLogic(4)
// gameLogic(5)
// gameLogic(6)
// gameLogic(7)
// gameLogic(8)
// gameLogic(9)
