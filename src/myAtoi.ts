function myAtoi(s: string): number {
    // Step 1: Read and ignore leading whitespace
    let i = 0;
    while (i < s.length && s[i] === ' ') {
      i++;
    }
  
    // Step 2: Check for sign
    let sign = 1;
    if (s[i] === '-' || s[i] === '+') {
      sign = s[i] === '-' ? -1 : 1;
      i++;
    }
  
    // Step 3: Read characters until a non-digit character is encountered
    let result = 0;
    while (i < s.length && isDigit(s[i])) {
      // Step 4: Convert characters to integer
      result = result * 10 + parseInt(s[i], 10);
  
      // Step 5: Check for overflow and clamp if necessary
      if (sign === 1 && result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
      } else if (sign === -1 && result > Math.pow(2, 31)) {
        return -Math.pow(2, 31);
      }
  
      i++;
    }
  
    // Apply sign to the result
    return sign * result;
  }
  
  function isDigit(char: string): boolean {
    return char >= '0' && char <= '9';
  }
  
  // Test cases
  console.log(myAtoi("  42  "));            // Output: 42
  console.log(myAtoi("   -42  "));        // Output: -42
  // console.log(myAtoi("4193 with words"));// Output: 4193
  