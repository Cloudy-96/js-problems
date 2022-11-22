// 1. for loop to establish the cube of each item in array
// 2. replicate sum code to add the results from step 1. another for loop 

let num = [3, 4, 5]

function cubes(num) {
    let numCube = []
    for (let i = 0; i < num.length; i++) {
        numCube2 = num[i] * num[i] * num[i]
        numCube.push(numCube2)
    }
    // console.log(numCube)
    let sum = 0
    for (let j = 0; j < numCube.length; j++) {
        sum += numCube[j]
    }
    console.log(sum)
    return numCube
}

cubes(num)