(function getAllPermutations() {
    const nums: number[] = [3, 5, 1];
    const ans: number[][] = []
    generatePermutation(nums, 0, ans)

    console.log(ans);
})()

function generatePermutation(nums: number[], idx: number, ans: number[][]) {


    if (idx >= nums.length) {
        ans.push([...nums]);
        return;
    }

    for (let i = idx; i < nums.length; i++) {
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
        generatePermutation(nums, idx + 1, ans);
        // I want to revert my swapping in the original array when I come back, otherwise inside the recursive call I want to use swapped array only.
        [nums[idx], nums[i]] = [nums[i], nums[idx]];
    }
}