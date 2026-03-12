# Count number of subarrays with k different integers, but length of subarrays can be any number.

arr = [1, 2, 1, 3, 4]; k = 3

def countSubarrays(arr, k):
    start = 0; end = 0; countMap = {}; count = 0

    while(end < len(arr)):
        endNum = arr[end]
        countMap[endNum] = countMap.get(endNum, 0) + 1
        while(start <= end and len(countMap) > k):
            startNum = arr[start]
            countMap[startNum] -= 1
            if countMap.get(startNum) == 0:
                del countMap[arr[start]]

            start += 1

        count += (end - start +1)
        end += 1
    return count

print(countSubarrays(arr, k) - countSubarrays(arr, k-1))