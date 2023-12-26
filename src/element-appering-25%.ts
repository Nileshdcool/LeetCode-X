function findSpecialInteger(arr: number[]): number {
    // Calculate the threshold, which is 25% of the array length
    const threshold = Math.floor(arr.length / 4);

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element occurs more than 25% of the time
        if (arr[i] === arr[i + threshold]) {
            return arr[i]; // If yes, return that element
        }
    }

    // If no special integer is found, return -1 or handle it based on the problem requirements
    return -1;
}

// Example 1
const arr1 = [1, 2, 2, 6, 6, 6, 6, 7, 10];
const result1 = findSpecialInteger(arr1);
console.log(result1); // Output: 6

// Example 2
const arr2 = [1, 1];
const result2 = findSpecialInteger(arr2);
console.log(result2); // Output: 1
