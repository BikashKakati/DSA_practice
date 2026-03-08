# Find longest substring with all same character and k number of not matching character( means k characters we can replace)

givenString = "AABCBBAB"
k = 2


def findLongestSubstring(givenString:str, k:int) ->int:
    start = 0; end = 0; n = len(givenString)
    count = {}
    maxFreq = 0
    maxLen = 0

    while(end < n):
        count[givenString[end]] = count.get(
            givenString[end], 0
            ) + 1

        maxFreq = max(maxFreq, count[givenString[end]])
        changes = (end-start+1) - maxFreq

        if(changes > k):
            count[givenString[start]] -= 1
            start += 1
            end += 1
            continue
        maxLen = max(maxLen, (end-start+1))
        end += 1

    return maxLen


print(findLongestSubstring(givenString, k))


# get count of character changes needed = len - frequency of any ch
# get count of min character changes needed = len - max frequency ch
# as much the ch will repeat, the less changes we need to do with other ch