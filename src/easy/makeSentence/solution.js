
let sentence= 'hi, my name is Kat'

function capitalize(sentence) {
    const upCaseChar = sentence[0].toUpperCase()
    const restOfSentence =sentence.slice(1)
    return `${upCaseChar}${restOfSentence}`
}

// console.log(capitalize(sentence))

function finalSentence(sentence) {
    let sentence2 = capitalize(sentence)
    if (sentence2.includes('.') || sentence2.includes('?') || sentence2.includes('!')) {
       console.log(sentence2)
    } else {
        const punctuation = `${sentence2}.`
        console.log(punctuation)
    }
}

console.log(finalSentence(sentence))

//only issue is that I don't know what the extra "undefined" line is referring to when i console.log
