function intToRoman(num: number): string {
    // Step 1: Define the Roman numeral symbols and their corresponding values.
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    // Step 2: Initialize an empty string to store the Roman numeral representation.
    let result = "";
  
    // Step 3: Iterate through the values and symbols, converting the number to Roman numerals.
    for (let i = 0; i < values.length; i++) {
        // Step 4: Check how many times the current value can be subtracted from the number.
        const count = Math.floor(num / values[i]);
  
        // Step 5: Append the corresponding symbol to the result string count times.
        result += symbols[i].repeat(count);
  
        // Step 6: Update the number by subtracting the value multiplied by the count.
        num -= values[i] * count;
    }
  
    // Step 7: Return the final Roman numeral representation.
    return result;
  }
  
  // Examples
  console.log(intToRoman(3));    // Output: "III"
  console.log(intToRoman(58));   // Output: "LVIII"
  console.log(intToRoman(1994)); // Output: "MCMXCIV"
  