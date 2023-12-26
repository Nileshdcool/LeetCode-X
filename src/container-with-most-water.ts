function maxArea(height: number[]): number {
    // Initialize two pointers, one at the beginning and one at the end of the array
    let leftPointer = 0;
    let rightPointer = height.length - 1;
  
    // Initialize a variable to keep track of the maximum area
    let maxArea = 0;
  
    // Iterate until the pointers meet
    while (leftPointer < rightPointer) {
        // Calculate the width of the container (the distance between the pointers)
        const width = rightPointer - leftPointer;
  
        // Calculate the height of the container (minimum height of the two lines)
        const containerHeight = Math.min(height[leftPointer], height[rightPointer]);
  
        // Calculate the area of the container and update maxArea if the current area is greater
        const area = width * containerHeight;
        maxArea = Math.max(maxArea, area);
  
        // Move the pointers towards each other
        if (height[leftPointer] < height[rightPointer]) {
            // If the left line is shorter, move the left pointer to the right
            leftPointer++;
        } else {
            // If the right line is shorter, move the right pointer to the left
            rightPointer--;
        }
    }
  
    // Return the maximum area found
    return maxArea;
  }
  
  // Example usage:
  const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log(maxArea(height1)); // Output: 49
  
  const height2 =  [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log(maxArea(height2)); // Output: 1
  