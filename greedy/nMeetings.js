const start = [0, 3, 1, 5, 5, 8];
const end = [5, 4, 2, 9, 7, 9];

function getMaxMeetingPossibleCount(start, end) {
    function sortByReference(refArray, targetArray) {
        const mergedData = refArray.map((element, index) => ({ ref: element, target: targetArray[index] }))
        mergedData.sort((a, b) => a.ref - b.ref);

        return {
            ref: mergedData.map((ele) => ele.ref),
            target: mergedData.map((ele) => ele.target)
        }
    }
    const sortedMeetingTimings = sortByReference(end, start)

    const sortedStart = sortedMeetingTimings.target;
    const sortedEnd = sortedMeetingTimings.ref;
    let count = 1
    let lastEndTime = sortedEnd[0];

    for (let i = 1; i < sortedStart.length; i++) {
        if (sortedStart[i] > lastEndTime) {
            count++;
            lastEndTime = sortedEnd[i];
        }
    }

    return count;

}

console.log(getMaxMeetingPossibleCount(start, end))