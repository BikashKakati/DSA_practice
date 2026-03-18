# find the min number of each subarray and sum
# num = [6, 7, 10, 1]
num = [3, 1, 2, 4]
# 6; 6,7; 6,7,10; 6,7,10,1 -> 6*3 + 1*1
# 7; 7,10; 7,10,1          -> 7*2 + 1*1
# 10; 10,1;                 -> 10*2 + 1*1
# ---> 46

# intution -> find the count of subarrays for the current number where it will be the smallest element.

def findMinSubarraySum(num):
    stack = []
    n = len(num)
    leftMin = [0]*n
    rightMin = [n-1]*n
    sum = 0

    for i in range(n):
        while(stack and stack[-1][0] >= num[i]):
            stack.pop()
        if(stack):
            leftMin[i] = stack[-1][1] + 1
        stack.append([num[i],i])
    stack = []
    for i in range(n-1, -1, -1):
        while(stack and stack[-1][0] >= num[i]):
            stack.pop()
        if(stack):
            rightMin[i] = stack[-1][1] - 1
        stack.append([num[i], i])
    
    for i in range(n):
        leftCount = abs(leftMin[i]- i )+1
        rightCount = abs(rightMin[i] - i)+1
        sum += num[i]*(leftCount*rightCount)

    return sum

print(findMinSubarraySum(num))