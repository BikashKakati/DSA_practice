nums = [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4 , 5, 5, 11]

def remove_duplicates(nums:List[int]) -> int:
    start = 0
    end = start
    while(nums[start] == nums[end] & end < len(nums)):
        end += 1
     
    while(end < len(nums)):
        if(nums[start] != nums[end]):
            temp = nums[start+1]
            nums[start+1] = nums[end]
            nums[end] = temp
            start += 1

        end += 1
    
    return start+1

print(remove_duplicates(nums))
