export function removeElement(nums: number[], val: number): number {
    if (nums.length === 0) {
        return 0;
    }

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            result.push(nums[i]);
        }
    }

    return result.length; 
};

console.log(removeElement([3,2,2,3],3));
