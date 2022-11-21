// we must print the multiples of num1 in (num1, num2) by the amount indicated in num2 eg 
// (7, 5) ➞ [7, 14, 21, 28, 35]                          -> 1st 5 multiples of 7
// (12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120] -> 1st 10 of 12
// (17, 6) ➞ [17, 34, 51, 68, 85, 102]                   -> 1st 6 of 17

// therefore: 

// 1. create a const of the number we want the multiples of
// 2. function with a for loop embedded (multiple, numTimes)-
// 3


let numSet = []

function maths(multiple, numTimes) {
    for (let i = 1; i <= numTimes; i++) {
        result = multiple * i
        const table = numSet.push(result)
    }
   return numSet

}

console.log(maths(7, 5))