import math

list = [2, 8, 5, 17, 9, 8, 9, 6, 7]
target = 9


# Time complexity - n^2, space - const
def twoSumApproachOne(nums:List[int], target:int) ->List[int]:
    answer = []
    for i in range(len(nums) - 1):
            if len(answer) > 0:
                break

            for j in range(i + 1, len(nums)):
                sum = nums[i] + nums[j]
                if sum == target:
                    answer.append(i)
                    answer.append(j)
                    break
    return answer


#Time complexity - n , space - n
def twoSumApproachTwo(nums:List[int], target:int) -> List[int]:
    map = {}

    for i in range(len(nums)):
        nextNum = target - nums[i]
        if nextNum in map:
            return [map[nextNum], i]
        
        map[nums[i]] = i


print(twoSumApproachOne(list, target))
print(twoSumApproachTwo(list, target))