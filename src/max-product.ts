export function maxProduct(nums: number[]): number {
    // Initialize variables to keep track of the two largest and two second-largest elements
    let max1 = -1;
    let max2 = -1;

    // Iterate through the array to find the two largest elements
    for (const num of nums) {
        if (num > max1) {
            max2 = max1; // Update the second-largest element
            max1 = num;  // Update the largest element
        } else if (num > max2) {
            max2 = num;  // Update the second-largest element
        }
    }

    // Calculate and return the maximum product
    return (max1 - 1) * (max2 - 1);
}

// Example usage:
const nums1 = [3, 4, 5, 2];
const result1 = maxProduct(nums1);
console.log(result1); // Output: 12

const nums2 = [1, 5, 4, 5];
const result2 = maxProduct(nums2);
console.log(result2); // Output: 16

const nums3 = [3, 7];
const result3 = maxProduct(nums3);
console.log(result3); // Output: 12
