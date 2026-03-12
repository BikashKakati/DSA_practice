# Find minimum substring that atleast contains characters of given string.

mainString = "ddaaccbbccabbc"
ref = "abbc"

def findMinSubstring(mainString, ref):
    start=0; end=0; count=0; startIndex=0; minLen= float("inf")
    hashMap = {}
    for ch in ref:
        hashMap[ch] = hashMap.get(ch, 0) + 1

    while(end < len(mainString)):
        endChar = mainString[end]
        if(endChar in hashMap):
            hashMap[endChar] -= 1
            if(hashMap[endChar] >= 0):
                count += 1
        while(count == len(ref) and start <= end):
            if(end-start+1 < minLen):
                minLen = end-start+1
                startIndex = start
            startChar = mainString[start]
            if(startChar in hashMap):
                hashMap[startChar] += 1
                if( hashMap[startChar] > 0):
                    count -= 1
            start += 1
        end += 1
    return mainString[startIndex:startIndex + minLen]

print(findMinSubstring(mainString, ref))