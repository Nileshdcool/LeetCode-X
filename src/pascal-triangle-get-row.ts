export function getRow(rowIndex: number): number[] {
    // base case

    if (rowIndex <= 0) {
        return [1];
    }

    const result: number[][] = [[1]];

    for (let index = 1; index <= rowIndex; index++) {

        const prevRow = result[index - 1];
        const currentRow: number[] = [1];

        for (let j = 1; j < index; j++) {
            currentRow[j] = prevRow[j - 1] + prevRow[j];
        }

        currentRow.push(1)
        result.push(currentRow)
    }
    return result[rowIndex];
}

console.log(getRow(3));