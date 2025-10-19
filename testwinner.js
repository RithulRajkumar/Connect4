const { verticalCheck, horizontalCheck, diagonalCheck } = require('./findwinner.js');

function horizontalTest() {
    let board = [
        [0, 0, 0, 0, 0, 0, 0],
        [2, 1, 0, 1, 2, 0, 1],
        [0, 2, 1, 2, 1, 0, 0],
        [1, 1, 2, 1, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 2, 2, 1]
    ];
    var winner = horizontalCheck(7, 6, board);
    console.log("winner = " + winner + " horizontally");
    console.assert(winner === 1, "❌ Player 1 should win horizontally");

}
function verticalTest() {
    let board = [
        [0, 0, 0, 0, 0, 0, 0],
        [2, 1, 0, 1, 2, 0, 1],
        [1, 2, 1, 2, 1, 0, 0],
        [1, 1, 2, 1, 0, 2, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 2, 2, 2, 1]
    ];
    var winner = verticalCheck(7, 6, board);
    console.log("winner = " + winner + " vertically");
    console.assert(winner === 1, "❌ Player 1 should win vertically");
}
function diagonalTest1() {
    let board = [
        [0, 0, 0, 0, 0, 0, 0],
        [2, 1, 0, 1, 2, 0, 1],
        [0, 2, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 0, 2, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 2, 2, 1]
    ];
    var winner = diagonalCheck(7, 6, board);
    console.log("winner = " + winner + " diagonally");
    console.assert(winner === 1, "❌ Player 1 should win diagonally");
}
function diagonalTest2() {
    let board = [
        [0, 0, 0, 0, 0, 0, 0],
        [2, 1, 0, 1, 2, 0, 1],
        [0, 2, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 2, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [2, 1, 1, 1, 2, 2, 1]
    ];
    var winner = diagonalCheck(7, 6, board);
    console.log("winner = " + winner + " diagonally");
    console.assert(winner === 1, "❌ Player 1 should win diagonally");
}
horizontalTest();
verticalTest();
diagonalTest1();
diagonalTest2();