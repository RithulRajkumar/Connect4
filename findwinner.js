export function verticalCheck(cols, rows, board) {

    for (let col = 0; col < cols; col++) {
        var player = 0;
        var count = 0;
        for (let row = 0; row < rows; row++) {
            var val = board[row][col];

            if (val == 0) {
                player = 0;
                count = 0;
                continue;
            }

            if (player == val) {
                count++;
            }
            else {
                player = val;
                count = 1;
            }

            if (count == 4) {
                return player;
            }
        }

    }
    return 0;
}

export function horizontalCheck(cols, rows, board) {

    for (let row = 0; row < rows; row++) {
        var player = 0;
        var count = 0;
        for (let col = 0; col < cols; col++) {
            var val = board[row][col];
            if (val == 0) {
                player = 0;
                count = 0;
                continue;
            }

            if (player == val) {
                count++;
            }
            else {
                player = val;
                count = 1;
            }

            if (count == 4) {
                return player;
            }
        }

    }
    return 0;
}

export function diagonalCheck(cols, rows, board) {
    // Check top-left to bottom-right diagonals
    for (let row = 0; row <= rows - 4; row++) {
        for (let col = 0; col <= cols - 4; col++) {
            let val = board[row][col];
            if (val !== 0 &&
                val === board[row + 1][col + 1] &&
                val === board[row + 2][col + 2] &&
                val === board[row + 3][col + 3]) {
                return val;
            }
        }
    }

    // Check bottom-left to top-right diagonals
    for (let row = 3; row < rows; row++) {
        for (let col = 0; col <= cols - 4; col++) {
            let val = board[row][col];
            if (val !== 0 &&
                val === board[row - 1][col + 1] &&
                val === board[row - 2][col + 2] &&
                val === board[row - 3][col + 3]) {
                return val;
            }
        }
    }

    return 0; // No diagonal winner
}
