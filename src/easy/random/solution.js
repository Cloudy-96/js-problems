

function numGenerator(min, max) {
 min = Math.ceil(min),
 max = Math.floor(max),
 result = Math.floor(Math.random() * (max - min) + min)
    return result
}

console.log(numGenerator(0, 10))