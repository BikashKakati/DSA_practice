const numss:number[] = [3, 2, 2, 1, 4]
const sum: number = 5
function printAllSubsequences(nums:number[], sum:number){
    const currentSum:number = 0;
    const start:number = 0;
    const helper:number[] = [];
    getSubsequenceWithDesiredSum(nums, helper, start, currentSum)
}

function getSubsequenceWithDesiredSum(nums:number[], helper:number[], start:number, currentSum:number){

    if(start >= nums.length){
        if(currentSum === sum){
            console.log(helper)
        }
        return;
    }


    helper.push(nums[start]);
    getSubsequenceWithDesiredSum(nums, helper, start+1, currentSum+nums[start])
    helper.pop();
    getSubsequenceWithDesiredSum(nums, helper, start+1,currentSum) 
}

printAllSubsequences(numss, sum)