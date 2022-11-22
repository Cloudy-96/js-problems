// 1. create variable/ object
// 2. function with a for loop (stake 1 string as arg)
// 3. for loop in which i copies and pushes the value next
//     -split() and repeat()  //anticipated problem- the index will change whihc might break my loop

// let newStr 

function ssttrriinngg(argStr) {
    let newStr = ''
    let oldStr = argStr
        for (let i = 0; i <= argStr.length; i++) {
        newStr = oldStr.charAt(i)
        newStr = oldStr.charAt(i)
          
    }
    return newStr
}

console.log(ssttrriinngg('Hi'))

// result= result + string