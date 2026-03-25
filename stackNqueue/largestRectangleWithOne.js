
function findMaxRectWithOne(board) {
    const n = board.length;
    const m = board.at(0).length;
    const sumStorage = Array.from({ length: m }).fill(0)
    let maxArea = -Infinity;

    for (let i = 0; i < n; i++) {
        const currentLayer = board[i];

        for (let j = 0; j < m; j++) {
            if (currentLayer[j] !== 0) {
                sumStorage[j] += 1
            } else {
                sumStorage[j] = 0
            }
        }
        const currentMaxArea = findLargestRectangleArea(sumStorage);
        maxArea = Math.max(currentMaxArea, maxArea)
    }
    return maxArea
}

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

const board = [[1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]]

console.log(findMaxRectWithOne(board))