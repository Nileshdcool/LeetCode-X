function plusOne(digits: number[]): number[] {
    // Start from the rightmost digit
    for (let i = digits.length - 1; i >= 0; i--) {
        // Increment the current digit
        digits[i]++;

        // If the digit becomes 10, set it to 0 and continue to the next digit
        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            // If the digit is less than 10, we are done and can return the updated array
            return digits;
        }
    }

    // If we reach here, it means all digits were 9 and we need to add a new digit at the beginning
    digits.unshift(1);

    return digits;
}

// Example usage:
console.log(plusOne([1, 2, 3]));  // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1]));  // Output: [4, 3, 2, 2]
console.log(plusOne([9]));  // Output: [1, 0]
