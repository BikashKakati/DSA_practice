# Find trapping rain water quantity in the buildings

buildings= [6, 3, 3, 4, 5, 7]
# buildings= [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

# TODO - before the most optimal


# most optimized one
def findQuantity(buildings):
    left = 0; right=len(buildings)-1; leftMax=0; rightMax=0; total= 0

    while(left < right):
        if(buildings[left] <= buildings[right]):
            if(leftMax - buildings[left] > 0):
                total += leftMax - buildings[left]
            else:
                leftMax = buildings[left]
            left+= 1
            continue
        if(buildings[left] > buildings[right]):
            if(rightMax - buildings[right] > 0):
                total += rightMax - buildings[right]
            else:
                rightMax = buildings[right]
            right -= 1
            continue
    return total

print(findQuantity(buildings))