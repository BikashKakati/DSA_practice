(function getSubsequencesOfSum() {
    const nums: number[] = [2, 3, 1, 5];
    const idx: number = 0;
    const sum: number = 10;
    const helper: number[] = [];

    printSubsequecesOfSum(nums, sum, idx, helper)
})()

function printSubsequecesOfSum(nums: number[], sum: number, idx: number, helper: number[]) {

    if (sum === 0) {
        console.log(helper);
    }

    if (sum <= 0 || idx >= nums.length) { // if we have +,- number this condition( sum<= 0 ) not work
        return;
    }

    helper.push(nums[idx])
    printSubsequecesOfSum(nums, sum - nums[idx], idx, helper)

    helper.pop()
    printSubsequecesOfSum(nums, sum, idx + 1, helper)
}