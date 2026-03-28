// Find the smalles number string after removing the k number of characters from the given number string.
// edge cases - "1234567", 00012, k==n
// const numberStr:string = "9811658111"
const numberStr:string = "000000"
// const numberStr:string = "0000001432219"
// const numberStr:string = "1432219"
// const numberStr:string = "1234567"
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

    let start = 0; const length = stack.length-1
    while(start<length && stack[start] === "0"){
        start++;
    }

    if(start === length){
        return "0";
    }
 
    if(k > 0){
        return stack.join("").slice(start, numberStr.length-k)
    }
    return stack.join("").slice(start)

}

console.log(findSmallestNumberStringAfterKElementRemove(numberStr, k))