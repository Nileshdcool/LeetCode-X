function transpose(matrix: number[][]): number[][] {
    // Step 1: Get the number of rows and columns in the original matrix
    const rows: number = matrix.length;
    const columns: number = matrix[0].length;
  
    // Step 2: Initialize a new 2D array to store the transposed matrix
    const transposedMatrix: number[][] = [];
  
    // Step 3: Iterate through columns of the original matrix
    for (let col = 0; col < columns; col++) {
        // Step 4: Initialize a new row for the transposed matrix
        const newRow: number[] = [];
  
        // Step 5: Iterate through rows of the original matrix
        for (let row = 0; row < rows; row++) {
            // Step 6: Add the element at the current column and row to the new row
            newRow.push(matrix[row][col]);
        }
  
        // Step 7: Add the new row to the transposed matrix
        transposedMatrix.push(newRow);
    }
  
    // Step 8: Return the transposed matrix
    return transposedMatrix;
  }
  
  // Example usage:
  const exampleMatrix1: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const exampleMatrix2: number[][] = [[1, 2, 3], [4, 5, 6]];
  
  console.log(transpose(exampleMatrix1));
  // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  
  console.log(transpose(exampleMatrix2));
  // Output: [[1, 4], [2, 5], [3, 6]]
  