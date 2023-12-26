export function convert(s: string, numRows: number): string {
    // If there is only one row or the string is empty, return the original string
    if (numRows === 1 || s.length <= numRows) {
      return s;
    }
  
    // Create an array to store characters for each row
    const rows: string[] = Array.from({ length: numRows }, () => '');
  
    // Initialize variables for tracking the current row and direction
    let currentRow = 0;
    let goingDown = false;
  
    // Iterate through each character in the string
    for (const char of s) {
      // Add the character to the current row
      rows[currentRow] += char;
  
      // Update the current row and direction based on the zigzag pattern
      if (currentRow === 0 || currentRow === numRows - 1) {
        goingDown = !goingDown;
      }
  
      currentRow += goingDown ? 1 : -1;
    }
  
    // Concatenate all rows to get the final zigzag pattern
    const result = rows.join('');
  
    return result;
  }
  
  // Example usage:
  const example1 = convert("PAYPALISHIRING", 3);
  console.log(example1); // Output: "PAHNAPLSIIGYIR"
  
  const example2 = convert("PAYPALISHIRING", 4);
  console.log(example2); // Output: "PINALSIGYAHRPI"
  
  const example3 = convert("A", 1);
  console.log(example3); // Output: "A"
  