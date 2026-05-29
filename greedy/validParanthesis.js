const str = "(*()"
// const str = "(*)("
// const str = "(*)("
// const str = "(*)"
const options = [1, -1, 0];

// Recursion
// function checkValidParanthesis(str, count, index) {
//     if (index >= str.length) {
//         return count === 0;
//     }

//     if (count < 0) {
//         return false;
//     }

//     let isValid = false;

//     if (str[index] === "*") {
//         for (let option of options) {
//             isValid = checkValidParanthesis(str, count + option, index + 1)

//             if (isValid) {
//                 break;
//             }
//         }
//     } else {
//         const value = str[index] === "(" ? 1 : -1;
//         isValid = checkValidParanthesis(str, count + value, index + 1)
//     }

//     return isValid;
// }


function checkValidParanthesis(str) {
    let min = 0, max = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            min = min + 1;
            max = max + 1;
        } else if (str[i] === ")") {
            min = min - 1;
            max = max - 1;
        } else {
            min = min - 1; // out of all options minimum will pick the 1 less than current one
            max = max + 1 // out of all options max will pick the 1 more than current one
        }

        if (min < 0) min = 0;
        if (max < 0) return false;
    }

    return (min === 0 || max === 0)
}
console.log(checkValidParanthesis(str, 0, 0))