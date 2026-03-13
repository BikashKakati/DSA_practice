# check valid parenthasis 
string = ")("
# string = "((("
# string = "[{[()[]{[}]}]"

def checkValid(string):
    stack = []
    for symbol in string:
        if (symbol == "(" or symbol == "{" or symbol == "["):
            stack.append(symbol)
            continue
        if( not stack or symbol == ")" and stack[-1] != "("):
            return False
        if(not stack or symbol == "}" and stack[-1] != "{"):
            return False
        if(not stack or symbol == "]" and stack[-1] != "["):
            return False

        stack.pop()

    return not stack # means empty stack

def checkValidShorter(string):
    stack = []
    pairsList = {")":"(", "}":"{", "]":"["}
    for symbol in string:
        if (symbol in pairsList.values()):
            stack.append(symbol)
        elif not stack or stack.pop() != pairsList[symbol]:
            return False

    return not stack # means empty stack


print(checkValid(string))