export function strStr(haystack: any, needle: any) {
    // Check if either haystack or needle is an empty string
    if (needle === "") {
      return 0; // Empty needle is always present at index 0
    }
  
    // Iterate through the haystack string
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      // Check if substring of haystack starting at index i matches the needle
      if (haystack.substring(i, i + needle.length) === needle) {
        return i; // Found a match, return the current index
      }
    }
  
    // If no match is found, return -1
    return -1;
  }
  
  // Example 1
  const example1 = strStr("hello", "ll");
  console.log(example1); // Output: 2
  
  // Example 2
  const example2 = strStr("aaaaa", "bba");
  console.log(example2); // Output: -1
  