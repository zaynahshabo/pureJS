// https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
// a power of two is a number of the form 2n where n is an integer, i.e. the resudlt of exponentiation with number two as the base and integer n as the exponent.
// You may assume the input is always valid.
// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.


//Notes:
//receive an integer, n
//return true or false if it's a power of two - the result of taking 2 to the nth power. Edge Cases: 1 = true, 0 = false
//STEPS:
//if the square root of something is a whole number, then it is a power of 2
//test if it's a whole number- if number === number rounded then true


function isPowerOfTwo(n){
    if (n === 1 || n === 2 || Math.log2(n) > 1 && Math.log2(n) === Math.round(Math.log2(n))) {
        return true
    } else {
        return false
    }
}


//refactor
const isPowerOfTwo = n =>  (n === 1 || n === 2 || Math.log2(n) > 1 && Math.log2(n) === Math.round(Math.log2(n))) 


//best

function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n))
}

