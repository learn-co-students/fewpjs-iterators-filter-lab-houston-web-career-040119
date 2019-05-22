// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase === name.toLowerCase)
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => {
        let lastIndex = driver.length - 1
        let middleIndex = lastIndex.floor()
        let beginningPartName = driver.slice(0, middleIndex - 1)
        return beginningPartName.includes(letters)
    })
}