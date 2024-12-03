/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result;
const addUpResult = 2020;

for(let ii = 0; ii < list.length; ii++){
    for(let jj = ii + 1; jj < list.length; jj++){
        for (let kk = ii + 1; kk < list.length; kk++){
            if (list[ii] + list[jj] + list[kk] === addUpResult){
                result = list[ii] * list[jj] * list[kk];
                // break statement here
            }
        }
        // break statement here
    }
    // break statement here
}

// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);