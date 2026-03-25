const bars = [3, 0, 3, 2, 3]
// const bars = [2, 4, 3, 6, 5, 6, 3, 4, 1, 1, 4]
// const bars = [2, 1, 5, 6, 2, 3]
// [[0, 1], [2, 3], [3, 4]]
function findLargestRectangleArea(bars) {
    const stack = [];
    const len = bars.length;
    let maxArea = -Infinity;

    for (let i = 0; i < len; i++) {
        while (stack?.length && bars[i] < stack.at(-1)[0]) {
            const previousIdx = stack.at(-2) ? stack.at(-2)[1] + 1 : 0;
            const breadth = (i - 1) - (previousIdx) + 1
            const height = stack.at(-1)[0]
            maxArea = Math.max(maxArea, breadth * height)

            stack.pop()
        }

        stack.push([bars[i], i])
    }

    while (!!stack?.length) {
        const previousIdx = stack.at(-2) ? stack.at(-2)[1] + 1 : 0;
        const breadth = (len - 1) - (previousIdx) + 1
        const height = stack.at(-1)[0]
        maxArea = Math.max(maxArea, breadth * height)
        stack.pop()
    }

    return maxArea
}

console.log(findLargestRectangleArea(bars))