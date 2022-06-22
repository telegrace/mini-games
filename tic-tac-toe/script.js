let isPlayerOne = true; // o

let gameState = {
    state: "no game",
    noGames:0,
    moves: 0,
    playerOnePos: [], 
    playerTwoPos: []
}

let winningStates = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

const gameLogic = (squareId) => { 
    document.getElementById(squareId).addEventListener('click', function() {
        if (document.getElementById(squareId).innerHTML || gameState.state === "game over"){
            return
        }
        if (isPlayerOne){
            document.getElementById(squareId).innerHTML = "O";
            isPlayerOne = false;
            gameState.playerOnePos = [...gameState.playerOnePos, squareId]
            if (gameState.moves > 3){
                for (winningState in winningStates ){
                    if (winningState in gameState.playerOnePos){
                        gameState.state = "game over"
                        gameState.winner = "player one"
                        document.getElementById("game-state").innerHTML = "<h2>Player One WINS!</h2>";
                    }
                }
            }
            gameState.moves ++ 
            document.getElementById("player").innerHTML = "<h2>Player Two</h2>";
        }
        else {
            document.getElementById(squareId).innerHTML = "X";
            isPlayerOne = true;
            gameState.playerTwoPos = [...gameState.playerTwoPos, squareId]
            if (gameState.moves > 3){
                for (winningState in winningStates ){
                    if (winningState in gameState.playerOnePos){
                        gameState.state = "game over"
                        gameState.winner = "player two"
                        document.getElementById("game-state").innerHTML = "<h2>Player Two WINS!</h2>";

                    }
                }
            }
            gameState.moves ++ 
            document.getElementById("player").innerHTML = "<h2>Player One</h2>";
        }
        if (gameState.moves === 10){
            state = "draw"
        }
    });

}

for (let i = 1; i < 10; i++) {
   gameLogic(i)
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