(function getCountSubSqOfSum() {
    const nums: number[] = [2, 3, 2, 2, 1, 4]
    const startIdx: number = 0
    const requiredSum: number = 5;
    const currentSum: number = 0;
    const count = countSubSqOfSum(nums, startIdx, requiredSum, currentSum)
    console.log(count);
})()

function countSubSqOfSum(
    nums: number[],
    startIdx: number,
    requiredSum: number,
    currentSum: number
): number {
    if (startIdx >= nums.length) {
        if (currentSum === requiredSum) {
            return 1;
        }
        return 0;
    }

    currentSum += nums[startIdx];
    const preSum: number = countSubSqOfSum(nums, startIdx + 1, requiredSum, currentSum);

    currentSum -= nums[startIdx];
    const postSum: number = countSubSqOfSum(nums, startIdx + 1, requiredSum, currentSum)

    return preSum + postSum
}