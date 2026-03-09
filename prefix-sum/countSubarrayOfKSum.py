# nums = [1, 0, 1, 1, 0, 1]
nums = [2, 3, -6, 6, -1, 10, -5, -5]
k = 5
 
# count number of subarrays with sum k 

# logic is - 
# in an index  -> the prefix sum - k = sum of a subarry, if this sum exist in our hashmap, means after that subarray the remaining subarray sum is k
# <-------->|<----->
# prefixSum + k = total sum

def countSubarrays(nums, k):
    prefixSum = []
    storage = set()
    subarraysCount = 0

    for i in range(len(nums)):
        if i == 0:
            prefixSum.append(nums[i])
        else:
            prefixSum.append(prefixSum[i-1] + nums[i])
    
    for currentSum in prefixSum:
        if currentSum == k:
            subarraysCount += 1
        remaining = currentSum - k
        if remaining in storage:
            subarraysCount +=1
        storage.add(currentSum)
    
    return subarraysCount


print(countSubarrays(nums, k))
