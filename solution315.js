// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//--Notes
//receive an array of pos and neg integers
//return an array with [sumOfPos, sumOfNeg], or if empty or null, return []
//STEPS
//set conditional to push evens to one array, odds to another, zero counts as neither
//return these values as a new array
//handle empty array


input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]


function countPositivesSumNegatives(input) {
    let pos = 0
    let neg = []
    if (input == null || input.length == 0) {
        return []
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                pos++
            } else {
                neg.push(input[i])
            }
        }
        
        let sumNeg = neg.reduce((a,b) => a+b)
        return [pos, sumNeg] 
    }
}

countPositivesSumNegatives(input)


