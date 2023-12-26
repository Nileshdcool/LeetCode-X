export const isPalindrome = function (x: any) {
    // Step 1: Handle Negative Numbers
    // Firstly, we need to handle negative numbers, 
    // as they cannot be palindromes. If the number is negative, we can immediately return false.

    if (x < 0) {
        return false;
    }

    //Step 2: Extract Digits
    // Next, we need to extract the digits of the positive number. We can do this by repeatedly taking the remainder when divided by 10 and updating the number by removing its last digit.

    let originalNumber = x;
    let reversedNumber = 0;

    while (x > 0) {
        const digit = x % 10;
        reversedNumber = reversedNumber * 10 + digit;
        x = Math.floor(x / 10);
    }

    return originalNumber === reversedNumber;
}