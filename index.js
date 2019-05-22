// Code your solution here

function findMatching(array,string){
     return array.filter(n => {
       return n.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array,string){
    return array.filter(n =>{
        return n.charAt(0,1) === string.charAt(0,1)
    })
}

function matchName(list,name){
    return list.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase()
    })
}