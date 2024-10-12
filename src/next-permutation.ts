export function nextPermutation(nums: number[]): number[] {
    // Step 1: Find the first decreasing element from the right
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // Step 2: If a decreasing element is found
    if (i >= 0) {
        // Find the next larger element to the right of nums[i]
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        // Swap nums[i] and nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: Reverse the part after the pivot (i+1 to the end)
    reverse(nums, i + 1);
    return nums;
}

// Helper function to reverse a part of the array
function reverse(nums: number[], start: number): void {
    let end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
