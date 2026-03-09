# Count total subarrays with k sum, but only included odd numbers in the sum

nums = [1, 2, 3, 1, 1, 1, 1, 3, 2, 4]
k = 4

def checkIsOdd(num):
    return num % 2 == 1
def countSubarrays(nums, k):
    start = 0; end = 0; count = 0; oddSum = 0

    while(end < len(nums)):
        if checkIsOdd(nums[end]):
            oddSum += nums[end]
        
        while(oddSum > k):
            if checkIsOdd(nums[start]):
                oddSum -= nums[start]
            start += 1
        
        count += (end - start + 1)
        end += 1
    return count

print(countSubarrays(nums, k) - countSubarrays(nums, k-1))