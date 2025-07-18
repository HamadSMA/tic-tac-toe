const gameBoard = {
    board: ["x", "x", "o", "x", "x", "x"],
}

function createUser(player1, player2) {
    return {player1, player2}
}


function checkWinner(board) {

    let winner = "";
    if (board[0] === board[1] && board[1] === board[2]) {
        if (board[0] === "x") {
            winner = "x"
        } else {
            winner = "o"
        }
    } else if (board[3] === board[4] && board[4] === board[5]) {
        if (board[3] === "x") {
            winner = "x"
        } else {
            winner = "o"
        }
    } else if (board[6] === board[7] && board[7] === board[8]) {
        if (board[6] === "x") {
            winner = "x"
        } else {
            winner = "o"
        }
    } else if (board[0] === board[4] && board[4] === board[8]) {
        if (board[0] === "x") {
            winner = "x"
        } else {
            winner = "o"
        }
    } else if (board[2] === board[4] && board[4] === board[6]) {
        if (board[2] === "x") {
            winner = "x"
        } else {
            winner = "o"
        }
    } else if (board[0] === board[3] && board[3] === board[6]) {
        if (board[0] === "x") {
            winner = "x"
        } else {
            winner = "o"
        }
    } else if (board[1] === board[4] && board[4] === board[7]) {
        if (board[1] === "x") {
            winner = "x"
        } else {
            winner = "o"
        }
    } else if (board[2] === board[5] && board[5] === board[8]) {
        if (board[2] === "x") {
            winner = "x"
        } else {
            winner = "o"
        }
    }
    return (winner === "x" || winner === "o") ? winner : "";
}

gameBoard.winner = checkWinner(gameBoard.board);
console.log(gameBoard.winner);
console.log(gameBoard);