const intervals = [[1, 2], [2, 3]];
// const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
// const intervals = [[0, 5], [3, 4], [1, 2], [5, 9], [5, 7], [7, 9]]

// Remove minimum intervals that no intervals should overlap after that and return the count of removals.

function getMinimumRemovals(intervals) {
    const sortedIntervalsBasedOnEndTime = intervals.sort((a, b) => a[1] - b[1]);

    let left = 0;
    let right = left + 1;
    let removalCount = 0;
    let n = sortedIntervalsBasedOnEndTime.length;

    while (right < n) {
        while (right < n && sortedIntervalsBasedOnEndTime[left][1] > sortedIntervalsBasedOnEndTime[right][0]) {
            right++;
            removalCount++;
        }

        left = right;
        right = left + 1;
    }

    return removalCount;

}

console.log(getMinimumRemovals(intervals));