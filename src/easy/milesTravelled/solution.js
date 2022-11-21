// # Pseudo Code Solution
// <!- we need to calculate the distance travelled when given the time of thr journey and the speed. But first we must convert the time from minutes to hours. We then want the answer to be rounded to a full nummber -->
// <!-- Given a travel duration in minutes and a number representing the speed of that journey in miles per hour, find the distance travelled in miles. Round your answer to the nearest mile (e.g. `1.6` should be `2`, as should `2.4`. `2.5` should be `3`). -->

// 1. convert minutes to hours
// 2. const: speed in miles p/hr
// 3. distance(in miles) = speed(miles p/hr) * time (in hours)


function distance(mins, miles) {
    let hour = mins/60 
    let result = hour * miles
    let rounded = Math.round(result)
    return `Your distance is ${rounded} miles`
}

console.log(distance(304, 40))