import { getValidMoves } from './gameBoard.js';

export function knightMoves(start, end) {
  // Create the 8x8 visited grid 
  const visited = [];
  for (let i = 0; i < 8; i++) {
    visited[i] = [];
    for (let j = 0; j < 8; j++) {
      visited[i][j] = false;
    }
  }

  const queue = [];
  queue.push({ pos: start, path: [start] });
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const current = queue.shift();
    const currentPos = current.pos;
    const currentPath = current.path;

    if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
      return currentPath;
    }

    let nextMoves = getValidMoves(currentPos);
    // sort neighbours to make the result deterministic and steer the search
    // toward the target; this also aligns with the example output from the
    // curriculum lesson.
    nextMoves.sort((a, b) => {
      // primary: Manhattan distance to goal (closer first)
      const da = Math.abs(a[0] - end[0]) + Math.abs(a[1] - end[1]);
      const db = Math.abs(b[0] - end[0]) + Math.abs(b[1] - end[1]);
      if (da !== db) return da - db;
      // tie-break: prefer moves with higher y (more 'forward' on board)
      if (a[1] !== b[1]) return b[1] - a[1];
      // final tie-break: smaller x coordinate
      return a[0] - b[0];
    });

    for (let i = 0; i < nextMoves.length; i++) {
      const move = nextMoves[i];
      const x = move[0];
      const y = move[1];

      if (visited[x] !== undefined && visited[x][y] === false) {
        visited[x][y] = true;
        
        const newPath = [...currentPath, move];
        queue.push({ pos: move, path: newPath });
      }
    }
  }
}
