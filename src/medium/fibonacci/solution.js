// 1.) Create an empty array
// 2.) Pass that array into a function
// 2.1) Create variable to store 1st for loop sum
// 3.) For loop (Loop will start on 1, will loop till 100, ++)
// 4.) Inside the loop we will have index 0 + index 1 = 

let array = [0, 1]

function fibonacci (array) {
console.log(array)

let sum = []
let indexOne = []
let indexTwo = []


    for (i = 2; i <= 5; i++){
        // console.log(i)
        indexOne.push(array[i-1])
        indexTwo.push(array[i-2])
        console.log(indexOne)
        console.log(indexTwo)
        // sum.push(sum2)
        // console.log(sum2)
    }
    // console.log(sum)
    return
}

fibonacci(array)