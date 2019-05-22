// Code your solution 
function findMatching(drivers,string){
    return drivers.filter(function(x){
        return x.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers,string){
    let size = string.length
    return drivers.filter(function(x){
        return x.slice(0,size).toLowerCase() === string.toLowerCase()
    })
}

function matchName(drivers,string){
    return drivers.filter(function(x){
        return x.name === string
    })
}