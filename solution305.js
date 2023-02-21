// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0


//Notes:
//receive an array of at least 1 number, and a string, toReturn, stating either 'value' or 'index'
//return the smallest value or its index based on parameter 2, of the given array

//STEPS:
//find the array's smallest value
    //const min = Math.min(...arr)
    //console.log(arr.indexOf(min))
//if toReturn is 'value' return its value, else return its index


function min(arr, toReturn) {
    let min = Math.min(...arr)
    let arrIndex = arr.indexOf(min)
    if (toReturn === 'value') {
        return min
    } else {
        return arrIndex
    }
}


min([1,2,3,4,5], 'value')





