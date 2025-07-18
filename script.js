function gameBoard() {
    const tile = ["x", "x", "o", "x", "x", "x"]
    return {tile}
}

function createUser(player1, player2) {
    return {player1, player2}
}


function checkWinner() {
    const gb = gameBoard();
    const tile = gb.tile
    let winner = "";
    if (tile[0] === tile[1] && tile[1] === tile[2]) {
        if (tile[0] === "x") {
            winner = "player1"
        } else {
            winner = "player2"
        }
    } else if (tile[3] === tile[4] && tile[4] === tile[5]) {
        if (tile[3] === "x") {
            winner = "player1"
        } else {
            winner = "player2"
        }
    } else if (tile[6] === tile[7] && tile[7] === tile[8]) {
        if (tile[6] === "x") {
            winner = "player1"
        } else {
            winner = "player2"
        }
    } else if (tile[0] === tile[4] && tile[4] === tile[8]) {
        if (tile[0] === "x") {
            winner = "player1"
        } else {
            winner = "player2"
        }
    } else if (tile[2] === tile[4] && tile[4] === tile[6]) {
        if (tile[2] === "x") {
            winner = "player1"
        } else {
            winner = "player2"
        }
    } else if (tile[0] === tile[3] && tile[3] === tile[6]) {
        if (tile[0] === "x") {
            winner = "player1"
        } else {
            winner = "player2"
        }
    } else if (tile[1] === tile[4] && tile[4] === tile[7]) {
        if (tile[1] === "x") {
            winner = "player1"
        } else {
            winner = "player2"
        }
    } else if (tile[2] === tile[5] && tile[5] === tile[8]) {
        if (tile[2] === "x") {
            winner = "player1"
        } else {
            winner = "player2"
        }
    }
    return winner
}

console.log(checkWinner())


