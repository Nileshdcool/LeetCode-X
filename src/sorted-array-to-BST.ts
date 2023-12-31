export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null;
    }

    const midIndex = Math.floor(nums.length / 2);

    const root = new TreeNode(nums[midIndex]);

    root.left = sortedArrayToBST(nums.slice(0, midIndex));
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));

    return root;
}

const nums1 = [-10, -3, 0, 5, 9];
const tree1 = sortedArrayToBST(nums1);
console.log(tree1);