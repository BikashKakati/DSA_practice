// Find the smalles number string after removing the k number of characters from the given number string.

// const numberStr:string = "9811658111"
const numberStr:string = "1432219"
const k:number = 3

function findSmallestNumberStringAfterKElementRemove(numberStr:string, k:number):string {
    const stack:string[] = []

    for(let chr of numberStr){ 
        while(!!stack?.length &&  Number(stack.at(-1)) > Number(chr) && k > 0){
            stack.pop()
            k--;
        }
        stack.push(chr)
    }

    return stack.join("")

}

console.log(findSmallestNumberStringAfterKElementRemove(numberStr, k))