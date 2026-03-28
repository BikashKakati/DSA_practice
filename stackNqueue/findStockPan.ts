/**
 * Find the maximum consecutive days where stock prices are lower or equal than current day
 */

const stockPrices:number[] = [3, 1, 2, 4, 3, 2, 8, 6, 10]

function findMaximumDays(stockPrices:number[]):number{
    let maximumDays:number = 1;
    const stack:number[][] = []
    const stockPricesListLen:number = stockPrices.length;

    for(let i = 0; i<stockPricesListLen; i++){
        while(!!stack.length && stack.at(-1)![0] <= stockPrices[i]){
            stack.pop()
        }

        let startIndex = 0
        if(!!stack.length){
            startIndex = stack.at(-1)![1] + 1
        }
        maximumDays = Math.max(
            maximumDays, (i - startIndex) + 1
        )
        stack.push([stockPrices[i], i])
    }

    return maximumDays
}

console.log(findMaximumDays(stockPrices))