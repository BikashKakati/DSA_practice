string = "dcadccccd"


def find_longest_substring_without_repeating(string:string):
    start = 0
    end = start
    maxLen = 0
    stringLen = len(string)
    hashMap = {}

    while(end < stringLen):

        if(string[end] in hashMap):
            if(start <= hashMap[string[end]]):
                start = hashMap[string[end]] + 1
                print(start)
        
        maxLen = max((end-start+1), maxLen)
        print(end-start+1)
        hashMap[string[end]] = end
        end += 1
        print(hashMap)

    
    return maxLen

print(find_longest_substring_without_repeating(string=string))
