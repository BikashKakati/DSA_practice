const nCount:number = 7;

function getFibonacci(n:number):number{
    if(n === 1) return 1;
    if(n === 0) return 0;
    return getFibonacci(n-1) +getFibonacci(n-2)
}

console.log(getFibonacci(nCount))