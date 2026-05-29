const intervals = [[1, 2], [3, 4], [7, 9], [10, 11], [12, 16]]

// const newInterval = [5, 11]
const newInterval = [5, 6]

function getMergedInterval(intervals, newInterval) {
    const ans = []; let i = 0, n = intervals.length;

    while (i < n && intervals[i][1] < newInterval[0]) {
        ans.push(intervals[i]);
        i++;
    }
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++;
    }
    ans.push(newInterval);
    ans.push(...intervals.slice(i));

    return ans;
}

console.log(getMergedInterval(intervals, newInterval))