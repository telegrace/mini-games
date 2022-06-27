let isPlayerOne = true; // o

let gameState = {
  state: "no game",
  "player one": [],
  "player two": [],
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

const checkIfWin = (player) => {
  for (indexNo in winningStates) {
    let matches = 0;
    for (let n = 0; n < 3; n++) {
      if (gameState[player].includes(winningStates[indexNo][n])) {
        matches++;
      }
      if (matches === 3) {
        gameState = { ...gameState, state: "game over" };
        document.getElementById(
          "game-state"
        ).innerHTML = `<h2>${player} WINS!</h2>`;
      }
    }
  }
};

const playerTurn = (player, squareId) => {
  const oOrX = player === "player one" ? "O" : "X";
  document.getElementById(squareId).innerHTML = oOrX;
  gameState[player] = [...gameState[player], squareId]; //this is okay
  checkIfWin(player);
  document.getElementById("player").innerHTML = `<h2>${player}</h2>`;
};

const gameLogic = (squareId) => {
  document.getElementById(squareId).addEventListener("click", function () {
    if (
      document.getElementById(squareId).innerHTML ||
      gameState.state === "game over"
    ) {
      return;
    }
    if (isPlayerOne) {
      playerTurn("player one", squareId);
      isPlayerOne = false;
    } else {
      playerTurn("player two", squareId);
      isPlayerOne = true;
    }
    if (gameState["player one"].length === 5) {
      state = "draw";
    }
  });
};

for (let i = 1; i < 10; i++) {
  gameLogic(i);
}
