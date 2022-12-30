// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//receive a non-empty array of numbers, and a number
//return new array of least even numbers, of the length specified, and in original order
//sort low to high
//if the number is even, push to new array, up to length specified
//


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let number = 3

function evenNumbers(array, number) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arr.push(array[i])
        }
    }
    return arr.slice(0,number) 
}

evenNumbers(array, number)




