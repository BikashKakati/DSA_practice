# find longest subarray with continuous ones and shifting k zeros

# nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
# nums = [1, 1, 1, 1, 0]
nums = [1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0]
k = 4

def find_longest_subarray(nums, k):
    start = 0
    end = 0
    maxLen = 0
    zerosFound = 0

    while(end < len(nums)):
        if(nums[end] == 0):
            zerosFound += 1
        
        while(zerosFound > k):
            if(nums[start] == 0):
                zerosFound -= 1
            start += 1
        
        maxLen = max(maxLen, (end - start + 1))
        end += 1
    return maxLen

print(find_longest_subarray(nums, k))