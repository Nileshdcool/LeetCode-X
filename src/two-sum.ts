export var twoSum = function (nums: number[], target: number) {
    const indices: any = {};
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        if (indices[target - num] != null) {
            return [indices[target - num], index];
        }
        indices[num] = index;
    }
}