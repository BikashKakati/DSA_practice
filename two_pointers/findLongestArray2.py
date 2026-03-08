# find longest subarray with two unique elements
# different numbers representing different types of fruits and we have to find lonngest garden with unique 2 fruits

fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4, 3, 4, 3, 1]
def find_longest_subarray(fruits):
    start = 0
    end = 0
    hashMap = {}
    maxLen = 0

    while(end < len(fruits)):
        hashMap[fruits[end]] = end

        if(start < end and len(hashMap) > 2):
            key = fruits[start]
            start = hashMap[key] + 1
            del hashMap[key]

        print(start, end)
        maxLen = max(maxLen, (end-start+1))
        end += 1

    return maxLen

print(find_longest_subarray(fruits))