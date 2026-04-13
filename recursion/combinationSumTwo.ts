// get arrays with sum target those never repeat and follows order as given array elements.
(function getCombSum() {
    const nums: number[] = [1, 1, 1, 2, 2];
    nums.sort((a, b) => a - b)
    const targetSum: number = 4;
    const idx: number = 0;
    const answer: number[][] = [];

    generateCombinationSum(
        nums, targetSum, idx, [], answer
    )
    console.log(answer)
})()


function generateCombinationSum(
    givenArr: number[],
    targetSum: number,
    idx: number,
    helper: number[],
    answer: number[][]
) {
    if (targetSum === 0) {
        answer.push([...helper]);
        return;
    }


    for (let i = idx; i < givenArr.length; i++) {
        if (i > idx && givenArr[i] === givenArr[i - 1]) {
            continue;
        }

        if (givenArr[i] > targetSum) {
            break;
        }

        helper.push(givenArr[i]);
        generateCombinationSum(
            givenArr,
            targetSum - givenArr[i],
            i + 1,
            helper,
            answer
        )
        helper.pop()
    }

}