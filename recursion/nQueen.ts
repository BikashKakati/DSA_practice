(function getNQueensBoards() {
    const n = 4;
    const chessBoard: number[][] = Array.from({ length: n }).map((ele) => Array.from({ length: n }).map(ele => 0));
    const rowFlags = Array.from({ length: n }).map(ele => 0);
    const topToBottomDiagonalFlag: Record<number, number | undefined | undefined> = {};
    const bottomToTopDiagonalFlag: Record<number, number> = {};
    const answer: number[][][] = []

    findBoardsWithNQueens(n, chessBoard, 0, rowFlags, topToBottomDiagonalFlag, bottomToTopDiagonalFlag, answer);

    console.log(JSON.stringify(answer))
})()


function findBoardsWithNQueens(
    n: number,
    chessBoard: number[][],
    column: number,
    rowFlags: number[],
    topToBottomDiagonalFlag: Record<number, number | undefined>,
    bottomToTopDiagonalFlag: Record<number, number | undefined>,
    answer: number[][][]
) {
    if (column >= n) {
        answer.push(JSON.parse(JSON.stringify([chessBoard])));
        return;
    }

    for (let row = 0; row < n; row++) {
        if (
            rowFlags[row] === 0 &&
            !topToBottomDiagonalFlag?.[row - column + (n - 1)] &&
            !bottomToTopDiagonalFlag?.[row + column]
        ) {
            rowFlags[row] = 1;
            topToBottomDiagonalFlag[row - column + (n - 1)] = 1;
            bottomToTopDiagonalFlag[row + column] = 1;

            chessBoard[row][column] = 1
            findBoardsWithNQueens(
                n,
                chessBoard, column + 1,
                rowFlags,
                topToBottomDiagonalFlag, bottomToTopDiagonalFlag,
                answer
            )

            // reset
            chessBoard[row][column] = 0;
            rowFlags[row] = 0;
            topToBottomDiagonalFlag[row - column + (n - 1)] = undefined;
            bottomToTopDiagonalFlag[row + column] = undefined;
        }
    }
}