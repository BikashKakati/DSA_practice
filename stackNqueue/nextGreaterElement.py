# Find the next greater element for each element, if not found add -1 

num = [6, 10, 11, 12, 13]
# num = [6, 0, 8, 1, 3]


def findNextGreaterElement(num):
    length = len(num)
    stack = []; ans = [-1]*length
    for i in range(length-1, -1, -1):
        while stack and stack[-1] <= num[i] :
            stack.pop()
        if stack:
            ans[i] = stack[-1]
        # or 
        # ans[i] = stack[-1] if stack else -1
        stack.append(num[i])
    return ans


print(findNextGreaterElement(num))