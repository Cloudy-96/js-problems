// 1. create variable/ object
// 2. function with a for loop (stake 1 string as arg)
// 3. for loop in which i copies and pushes the value next
//     -split() and repeat()  //anticipated problem- the index will change whihc might break my loop

// let newStr 

function ssttrriinngg(argStr) {
    let newStr = ""
    // console.log(argStr)
        for (let i = 0; i < argStr.length; i++) {
        newStr += argStr[i] + argStr[i]
        // console.log(argStr[i] + argStr[i])
        
    }
    // console.log(newStr)
    return newStr
}

console.log(ssttrriinngg('Look what I did Kat'))s

// result= result + string