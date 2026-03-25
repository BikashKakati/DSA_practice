astroids = [-3, 4, 7, -8, -9, 8, -2, 3, 4, -4]

def getFinalState(astroids):
    stack = []

    for astroid in astroids:
        while(stack and stack[-1] >= 0 and astroid < 0 and stack[-1] <= abs(astroid)):
            num = stack.pop()
            if(num == abs(astroid)):
                break
        
        if(stack and stack[-1] >= 0 and astroid < 0):
            continue
        stack.append(astroid)
    return stack

# smaller version - 
# def getFinalState(astroids):
#     stack = []

#     for astroid in astroids:
#         while(stack and stack[-1] >= 0 and astroid < 0):
#             if(stack[-1] < -astroid):
#                 stack.pop()
#                 continue
#             if(stack[-1] == -astroid):
#                 stack.pop()
#             break
#         else:
#             stack.append(astroid)
        
#     return stack
print(getFinalState(astroids))