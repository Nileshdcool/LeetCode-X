export function generate(numRows: number): number[][] {
    if (numRows <= 0) {
        return [];
    }

    const result: number[][] = [[1]];

    for (let index = 1; index < numRows; index++) {
        const prevRow = result[index - 1];
        const currentRow: number[] = [1];

        for (let j = 1; j < index; j++) {
            currentRow[j] = prevRow[j - 1] + prevRow[j];
        }

        currentRow.push(1);

        result.push(currentRow)

    }

    return result;
}

console.log(generate(5));