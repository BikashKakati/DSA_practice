const n:number = 5

function printNTo1(n:number){
    if(n < 1){
        return;
    }
    console.log(n);
    printNTo1(n-1);
}
function printNTo1Backtrack(n:number){
    if(n > 5){
        return;
    }
    printNTo1Backtrack(n+1);
    console.log(n);
}

printNTo1(n)
printNTo1Backtrack(1)