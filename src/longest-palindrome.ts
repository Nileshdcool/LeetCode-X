export function longestPalindrome(s: string): string {
    // Check if the string is empty or has only one character
    if (s.length <= 1) {
        return s;
    }

    let start = 0; // Initialize the start index of the longest palindrome
    let end = 0; // Initialize the end index of the longest palindrome

    // Helper function to expand around a center and find palindrome
    function expandAroundCenter(left: number, right: number): number {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        // Expand around the center for odd-length palindrome
        const len1 = expandAroundCenter(i, i);
        // Expand around the center for even-length palindrome
        const len2 = expandAroundCenter(i, i + 1);

        // Find the maximum length between len1 and len2
        const len = Math.max(len1, len2);

        // Update start and end indices if a longer palindrome is found
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, end + 1);
}

// Example 2
const example2 = "babad";
console.log(longestPalindrome(example2)); // Output: "bb"
