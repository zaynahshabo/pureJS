// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


let a = [101, 45, 75, 105, 99, 107]
let limit = 107

function smallEnough(a, limit){
    let isBelowLimit = (currentValue) => currentValue <= limit 
    return (a.every(isBelowLimit))
}

smallEnough(a, limit)






