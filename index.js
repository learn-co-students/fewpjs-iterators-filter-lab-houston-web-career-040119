// Code your solution here
function findMatching(array, word) {
    return array.filter(element => element.toLowerCase() === word.toLowerCase())
}

function fuzzyMatch(array, word) {
    return array.filter(element => element.slice(0, word.length) === word)
}

function matchName(array, name) {
    return array.filter(obj => obj.name === name)
}