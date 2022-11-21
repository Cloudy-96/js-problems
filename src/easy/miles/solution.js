// Convert kilometers to miles - assume 1.6 kilometers in
//  a mile and round your answer to the nearest 
//  mile (e.g. `1.6` should be `2`, as should `2.4`. `2.5` should be `3`).
let miles 
 let kilo


 function convertKilo(kilo){
    let convert= kilo*0.6
 console.log("convert",convert)
console.log (convert.toFixed(3))
    let roundDownMile=Math.floor(convert)
    let roundUpMile=Math.round(convert)
//    console.log(roundUpMile)
//    console.log(roundDownMile)
 return roundUpMile
}
console.log(convertKilo(3))