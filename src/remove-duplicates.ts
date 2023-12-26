
function removeDuplicates(nums: any) {
    // Check if the array is empty or has only one element
    if (nums.length <= 1) {
      return nums.length;
    }
  
    // Initialize a variable to keep track of the unique elements
    let uniqueIndex = 0;
  
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
      // Compare the current element with the previous unique element
      if (nums[i] !== nums[uniqueIndex]) {
        // If they are different, increment the uniqueIndex
        // and update the element at that index with the current element
        uniqueIndex++;
        nums[uniqueIndex] = nums[i];
      }
      // If they are the same, continue to the next iteration without updating the uniqueIndex
    }
  
    // The uniqueIndex now represents the last index of the modified array
    // The length of the modified array is uniqueIndex + 1
    return uniqueIndex + 1;
  }
  
  // Example 1
  let nums1 = [1, 1, 2];
  let length1 = removeDuplicates(nums1);
  console.log(length1); // Output: 2
  console.log(nums1.slice(0, length1)); // Output: [1, 2]
  
  // Example 2
  let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  let length2 = removeDuplicates(nums2);
  console.log(length2); // Output: 5
  console.log(nums2.slice(0, length2)); // Output: [0, 1, 2, 3, 4]
  