export function threeSumClosest(nums: number[], target: number): number {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
  
    // Step 2: Initialize variables
    let closestSum = nums[0] + nums[1] + nums[2];
  
    // Step 3: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Two pointers approach
        let left = i + 1;
        let right = nums.length - 1;
  
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
  
            // Update closestSum if the currentSum is closer to the target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
  
            // Adjust pointers based on the comparison with the target
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
  
    // Step 4: Return the closest sum
    return closestSum;
  }
  
  // Example usage:
  const example1 = threeSumClosest([-1, 2, 1, -4], 1);
  console.log(example1); // Output: 2
  
  const example2 = threeSumClosest([0, 0, 0], 1);
  console.log(example2); // Output: 0
  