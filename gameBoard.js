export const BOARD_SIZE = 8;

const KNIGHT_OFFSETS = [
    [1, 2], [1, -2], [2, 1], [2, -1],
    [-1, 2], [-1, -2], [-2, 1], [-2, -1]
];


export function isLegal(x, y) {
    // ensure coordinates fall within 0-7 range of the board
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

export function getValidMoves([x, y]) {
    const validMoves = [];

    KNIGHT_OFFSETS.forEach(([dx, dy]) => {
        const newX = x + dx;
        const newY = y + dy;

        if(isLegal(newX, newY)) {
            validMoves.push([newX, newY]);
        }
    });
    return validMoves;
}
