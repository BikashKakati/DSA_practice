(function getSubsetSum() {
    const nums: number[] = [3, 1, 4];
    const answer: number[][] = [];
    const subsetSum: number[] = [];
    const idx: number = 0;

    generateSubsetSum(nums, idx, [], 0, answer, subsetSum)
    console.log(answer)
    console.log(subsetSum)
})()

function generateSubsetSum(nums: number[], idx: number, helper: number[], sumHelper: number, answer: number[][], subsetSum: number[]) {
    if (idx >= nums.length) {
        answer.push([...helper]);
        subsetSum.push(sumHelper);
        return;
    }

    helper.push(nums[idx]);
    generateSubsetSum(nums, idx + 1, helper, sumHelper + nums[idx], answer, subsetSum);
    helper.pop();
    generateSubsetSum(nums, idx + 1, helper, sumHelper, answer, subsetSum);

}