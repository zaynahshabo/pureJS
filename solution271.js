// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeros.

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10  =  50 .

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
// Explanation:
// The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

//receive an array of positive / negative / zero integers
//return the maximum product obtained from two adjacent numbers in an array
//STEPS:
//create a storage array for the prodcuts of the origal arrays adjacent values
//loop through original array
//push products to new array
//return max value of the new array


let array = [3, 6, -2, -5, 7, 3]

function adjacentElementsProduct(array) {
    let newArray = []
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i]*array[i+1])
    }return Math.max(...newArray)
}

adjacentElementsProduct(array)



