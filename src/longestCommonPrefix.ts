function longestCommonPrefix(strs: any) {
    // check if any empty array, if so return an empty string

    if (strs.length === 0) {
        return "";
    }

    // Step 2: Assume the first string in the array as the initial common prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;

        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }

        prefix = prefix.slice(0, j);

        if (prefix === "") {
            break;
        }

    }

    return prefix;

}


console.log(longestCommonPrefix(["flower","flow","flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["flower","flow","flight"]));  // Output: "fl"