# Count total subarrays with k sum 

nums = [1, 0, 1, 1, 0, 1]
k = 2


def countSubarrays(nums, k):
    start = 0; end = 0; sum = 0; subArraysCount = 0

    while(end < len(nums)):
        sum += nums[end]

        while(sum > k):
            sum -= nums[start]
            start += 1
        
        subArraysCount += end - start +1
        end += 1

    return subArraysCount

def getTotalCount(nums, k):
    countWithAtmostK = countSubarrays(nums, k)
    countWithAmostKMinus1 = countSubarrays(nums, k-1)
    return countWithAtmostK - countWithAmostKMinus1

print(getTotalCount(nums, k))