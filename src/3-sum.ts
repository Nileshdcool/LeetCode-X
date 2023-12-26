export function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
  
    // Step 1: Sort the input array
    nums.sort((a, b) => a - b);
  
    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicates
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      // Set pointers for the remaining part of the array
      let left = i + 1;
      let right = nums.length - 1;
  
      // Step 3: Two-pointer approach
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === 0) {
          // Found a triplet, add it to the result
          result.push([nums[i], nums[left], nums[right]]);
  
          // Skip duplicates
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
  
          // Move pointers
          left++;
          right--;
        } else if (sum < 0) {
          // Move the left pointer to increase the sum
          left++;
        } else {
          // Move the right pointer to decrease the sum
          right--;
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nums1 = [-1, 0, 1, 2, -1, -4];
  const result1 = threeSum(nums1);
  console.log(result1); // Output: [[-1, -1, 2], [-1, 0, 1]]
  
  
  