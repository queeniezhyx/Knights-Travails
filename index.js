import { knightMoves } from './knightMoves.js';

const result = knightMoves([3,3],[4,3]);

console.log("You made it in " + (result.length - 1) + " moves!");
console.log("Here is your path:");
for (let i = 0; i < result.length; i++) {
  console.log("[" + result[i][0] + "," + result[i][1] + "]");
}
