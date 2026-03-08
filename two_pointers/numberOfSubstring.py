string = "bbacba"
k = 3


# def find_number_of_substring(string, k):
#     n = len(string)
#     count = 0

#     for i in range(n - 1):
#         helper = set()
#         for j in range(i, n):
#             helper.add(string[j])
#             if len(helper) >= k:
#                 count += 1
                
#     return count

def find_number_of_substring(string, k):
    helper = {"a":-1, "b":-1, "c":-1}
    n = len(string)
    count = 0

    for i in range(n):
        helper[string[i]] = i

        if helper["a"] != -1 and helper["b"] != -1 and helper["c"] != -1:

            count = count + (1 + min(helper.values()))
    
    return count


print(find_number_of_substring(string, k))
