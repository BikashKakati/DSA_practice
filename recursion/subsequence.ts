
(function printAllSubsequence() {
    const nums: number[] = [3, 1, 2, 5]
    const helper: number[] = []
    const start: number = 0
    generateRecursiveSubsequence(nums, helper, start)
})()

function generateRecursiveSubsequence(nums: number[], helper: number[], start: number) {

    if (start >= nums.length) {
        if (!!helper?.length) {
            console.log(helper);
        }
        return;
    }
    helper.push(nums[start]);
    generateRecursiveSubsequence(nums, helper, start + 1)
    helper.pop()
    generateRecursiveSubsequence(nums, helper, start + 1)
}
