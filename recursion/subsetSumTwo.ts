// generate all the subsets without duplicates
/*
The main hack is if you don't want duplicate just use loop not to come back because loop will make sure that you go forward only
*/
(function getAllSubset() {
    const nums: number[] = [1, 2, 2, 2, 3, 3];
    const answer: number[][] = [];

    generateSubsetWithoutDuplicate(nums, 0, [], answer);
    console.log(answer);
})()

function generateSubsetWithoutDuplicate(nums: number[], idx: number, helper: number[], ans: number[][]) {

    ans.push([...helper]);

    for (let i = idx; i < nums.length; i++) {
        if (i > idx && nums[i] === nums[i - 1]) continue;

        helper.push(nums[i]);
        generateSubsetWithoutDuplicate(nums, i + 1, helper, ans);
        helper.pop()
    }
}