// const taskDetails = [
//     { id: 1, deadline: 4, profit: 40 },
//     { id: 2, deadline: 1, profit: 30 },
//     { id: 3, deadline: 2, profit: 40 },
//     { id: 4, deadline: 1, profit: 40 },
//     { id: 5, deadline: 3, profit: 35 },
// ]
const taskDetails = [
    { id: 1, deadline: 4, profit: 20 },
    { id: 2, deadline: 5, profit: 60 },//4
    { id: 3, deadline: 6, profit: 70 },//6
    { id: 4, deadline: 6, profit: 65 },//5
    { id: 5, deadline: 4, profit: 25 },//3
    { id: 6, deadline: 2, profit: 80 },//2
    { id: 7, deadline: 2, profit: 10 },
    { id: 8, deadline: 2, profit: 22 }, //1
]


function getMaxProfit(taskDetailsList) {
    const maxDeadline = taskDetailsList.reduce((max, task) => Math.max(max, task.deadline), 0);

    console.log(maxDeadline)

    const taskSortedByProfit = taskDetailsList.sort((a, b) => b.profit - a.profit);

    const taskOrderRecorder = Array.from({ length: maxDeadline });
    let totalProfit = 0;

    for (let taskDetails of taskSortedByProfit) {
        const { id, deadline, profit } = taskDetails;
        let tempIdx = deadline - 1;
        while (!!taskOrderRecorder[tempIdx] && tempIdx >= 0) {
            tempIdx--;
        }
        if (tempIdx >= 0) {
            taskOrderRecorder[tempIdx] = id;
            totalProfit += profit;
        }
    }

    return { totalProfit, taskOrderRecorder }
}

console.log(getMaxProfit(taskDetails));