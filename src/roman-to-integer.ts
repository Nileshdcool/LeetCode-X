const romanToInt = function (s: any) {
    // Step 1: Create a mapping of Roman numerals to their corresponding values
    const romanMap: any = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;

    // Step 3: Loop through the Roman numeral string from right to left
    for (let index = s.length - 1; index >= 0; index--) {
        const currentVal = romanMap[s[index]];
         // Step 5: Check if the current value is greater than or equal to the value on its right
        if (index < s.length - 1 && currentVal < romanMap[s[index + 1]]) {
            // Step 6: If true, subtract the current value from the result
            result -= currentVal;
        } else {
            // Step 7: If false, add the current value to the result
            result += currentVal;
        }
    }


    return result;

}

// Test cases
// console.log(romanToInt("III"));      // Output: 3
// console.log(romanToInt("IV"));       // Output: 4
// console.log(romanToInt("IX"));       // Output: 9
// console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994