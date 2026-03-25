def getLargestRectangle(nums):
    length = len(nums)
    leftNearestSmallerIndices = [0]*length
    rightNearestSmallerIndices = [length-1]*length
    maxArea = float("-Inf")

    stack = [] #[2,0],[3,1]
      # left
    for idx in range(length):
        currentNum = nums[idx]
        while(stack and stack[-1][0] >= currentNum):
            stack.pop()
        if(stack):
            leftNearestSmallerIndices[idx] = stack[-1][1]+1
        
        stack.append([currentNum, idx])
      #right
    stack = []
    for idx in range(length-1, -1, -1):
        currentNum = nums[idx]
        while(stack and stack[-1][0] >= currentNum):
            stack.pop()
        if(stack):
            rightNearestSmallerIndices[idx] = stack[-1][1]-1
        stack.append([currentNum, idx])

    for idx in range(length):
        breadth = rightNearestSmallerIndices[idx] - leftNearestSmallerIndices[idx] + 1
        height = nums[idx]
        maxArea = max(breadth * height, maxArea)

    return maxArea
nums = [2, 4, 3, 6, 5, 6, 3, 4, 1, 1, 4]
# nums = [2, 1, 5, 6, 2, 3]
print(getLargestRectangle(nums))