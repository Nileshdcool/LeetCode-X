export function createDifferenceMatrix(grid: number[][]): number[][] {
    const m = grid.length;
    const n = grid[0].length;

    // Initialize arrays to store counts of ones and zeros in rows and columns
    const onesRow: number[] = new Array(m).fill(0);
    const zerosRow: number[] = new Array(m).fill(0);
    const onesCol: number[] = new Array(n).fill(0);
    const zerosCol: number[] = new Array(n).fill(0);

    // Calculate counts of ones and zeros in rows and columns
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                onesRow[i]++;
                onesCol[j]++;
            } else {
                zerosRow[i]++;
                zerosCol[j]++;
            }
        }
    }

    // Initialize the difference matrix
    const diff: number[][] = [];
    for (let i = 0; i < m; i++) {
        diff[i] = new Array(n).fill(0);
    }

    // Calculate the difference matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return diff;
}


const grid1 = [[0,1,1],[1,0,1],[0,0,1]];
const result1 = createDifferenceMatrix(grid1);
console.log(result1);
// Output: [[0,0,4],[0,0,4],[-2,-2,2]]


