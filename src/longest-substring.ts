export const lengthOfLongestSubstring = function (s: string) {
    // initialize variables
    let maxLeangth = 0;
    let head = 0;
    
    const charIndexMap = new Map();

    for (let index = 0; index < s.length; index++) {
        const element = s[index];

        if (charIndexMap.has(element) && charIndexMap.get(element) >= head) {
            head = charIndexMap.get(element) + 1;
        }

        charIndexMap.set(element, index);

        maxLeangth = Math.max(maxLeangth, index - head + 1);
    }
    return maxLeangth;
}