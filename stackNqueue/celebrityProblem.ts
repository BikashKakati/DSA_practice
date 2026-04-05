const celebritiesStatus:number[][] = [
    [0, 1, 1, 1],
    [1, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 0, 0, 0]
]


function findCelebrity(celebritiesStatus:number[][]):number{ 
    const n:number = celebritiesStatus.length;
    let start:number = 0;
    let end:number = n-1;

    while(start < end){
        if(celebritiesStatus[end][start] === 1){
            end--
        }

        if(celebritiesStatus[start][end] === 1){
            start++
        }
    }
    console.log(start, end);

    for(let i = 0; i<n; i++){
        if(i === start){
            continue;
        }
        if(celebritiesStatus[i][start] === 0){
            return -1;
        }

        if(celebritiesStatus[start][i] === 1){
            return -1;
        }
    }

    return start
}

console.log(findCelebrity(celebritiesStatus))