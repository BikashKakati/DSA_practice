# Find next greater element in circular array
nums = [2, 10, 12, 10, 8]

def findNextGreaterElement(nums):
    lenOfNums = len(nums); stack = []; ans = [-1]*lenOfNums

    for i in range(2*lenOfNums-1, -1, -1):
        currentIdx = i % lenOfNums

        while(stack and stack[-1] <= nums[currentIdx]):
            stack.pop()
        
        if(stack):
            ans[currentIdx] = stack[-1]
        stack.append(nums[currentIdx])
    return ans

print(findNextGreaterElement(nums))