export function letterCombinations(digits: string): string[] {
    // Define the mapping of digits to letters
    const digitMap: { [key: string]: string[] } = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    // Result array to store combinations
    const result: string[] = [];

    // Helper function to perform DFS and generate combinations
    function dfs(index: number, currentCombination: string) {
        // Base case: if the current combination has reached the length of digits, add it to the result
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }

        // Get the letters corresponding to the current digit
        const letters = digitMap[digits[index]];

        // Iterate through each letter and perform DFS
        for (const letter of letters) {
            dfs(index + 1, currentCombination + letter);
        }
    }

    // Check if the input digits string is not empty, then start DFS
    if (digits.length > 0) {
        dfs(0, '');
    }

    return result;
}


console.log(letterCombinations("23"));  // Output: ["a","b","c"]
console.log(letterCombinations("23"));  // Output: ["a","b","c"]
