// Code your solution here

function findMatching(drivers,str) {
  return drivers.filter( driver => driver.toLowerCase() === str.toLowerCase() );
}

function fuzzyMatch(drivers,str) {
  return drivers.filter( driver => driver.toLowerCase().slice(0,str.length) === str.toLowerCase() );
}

function matchName(drivers,str) {
  return drivers.filter( driver => driver.name === str );
}
