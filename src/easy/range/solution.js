// take the list of number
// find the highest number 
// find the lowest number
// subtract the lowest number from highest  number

let num =[18,3,6,4]
let highNumber
let lowestNumber
console.log(num)
highNumber= Math.max(...num)
lowestNumber=Math.min(...num)
// console.log(highNumber)
// console.log(lowestNumber)
differnceOfNumber= highNumber - lowestNumber 
console.log(differnceOfNumber)