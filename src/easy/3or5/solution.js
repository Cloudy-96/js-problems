// If the number  is divisible by 3, OR the number is divisible 5 under the value of 1000, return the value (into an array?) 

let num = []

for (let i = 0; i < 1000 ; i++) {
    if ([i]/ 3 === 0 || [i]/ 5 === 0) {
    num.push(i)}
  } 
  
  console.log(num)


// console.log(factors(1000))


// add the sum of all the numbers that were returned in part 1