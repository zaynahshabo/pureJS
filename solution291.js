// https://www.codewars.com/kata/595aa94353e43a8746000120/discuss/javascript
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
// Example:
// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.
// Note: N may be 1 or less (in the latter case, the first array will be []).

//NOTES:
//receive a starting sequence of ordered numbers 1-n, arr, and a mixed array with a deleted number, mixArr
//return the missing number 
//if nothing missing, return 0, if n is <1, return []
//STEPS:
//filter for values not included in mixArr from arr
//return missing values, converted to Number format


let arr = [1,2,3,4,5]
let mixArr = [3,4,1,5,2]

function findDeletedNumber(arr, mixArr) {
    return Number( arr.filter(x => !mixArr.includes(x)) )
}

findDeletedNumber(arr, mixArr)



//refactored:
const findDeletedNumber = (arr, mixArr) => Number( arr.filter(x => !mixArr.includes(x)) )




