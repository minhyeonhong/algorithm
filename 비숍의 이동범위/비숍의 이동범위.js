function solution(bishops) {
    let dontMove = 0;
    let chessboard = []
    for (let i = 0; i < 8; i++) {
        chessboard[i] = new Array(1, 1, 1, 1, 1, 1, 1, 1)
    }

    bishops.map(move => {
        const idx1 = move.substr(0, 1).charCodeAt(0) - 65;
        const idx2 = Number(move.substr(1, 2)) - 1;

        for (let i = 0; i < 8; i++) {

            const firsrIdx = idx2 - (idx1 - i);
            const secondIdx = idx2 + (idx1 - i);

            if (i === idx1) {
                chessboard[idx1][idx2] = 0;
            } else {
                if (firsrIdx > -1 && firsrIdx < 8) {
                    chessboard[i][firsrIdx] = 0;
                }
                if (secondIdx > -1 && secondIdx < 8) {
                    chessboard[i][secondIdx] = 0;
                }
            }
        }
    })

    chessboard.map(arr => {
        dontMove += arr.reduce((prev, curr) => prev + curr, 0);
    })

    return dontMove
}