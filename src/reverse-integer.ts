function reverse(x: number): number {
    // Define the 32-bit signed integer range boundaries
    const INT32_MIN = -Math.pow(2, 31);
    const INT32_MAX = Math.pow(2, 31) - 1;

    // Initialize result variable to store the reversed integer
    let result = 0;
    let og = x;

    if (x < 0) {
        x = Math.abs(x);
    }
    
    // Iterate until x becomes 0
    while (x !== 0) {
        // Extract the last digit of x
        const digit = x % 10;

        // Check for potential overflow before updating the result
        if (
            result > Math.floor(INT32_MAX / 10) ||
            (result === Math.floor(INT32_MAX / 10) && digit > 7)
        ) {
            return 0; // Overflow occurred
        }

        if (
            result < Math.floor(INT32_MIN / 10) ||
            (result === Math.floor(INT32_MIN / 10) && digit < -8)
        ) {
            return 0; // Overflow occurred
        }

        // Update the result by appending the extracted digit
        result = result * 10 + digit;

        // Remove the last digit from x
        x = Math.floor(x / 10);
    }

    return og < 0 ? - result : result;
}

// Test cases
console.log(reverse(123));  // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120));  // Output: 21
