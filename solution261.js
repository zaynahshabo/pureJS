// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
// isSquare (-1) // => false
// isSquare   3  // => false
// isSquare   4  // => true
// isSquare  25  // => true
// isSquare  26  // => false

//summary - check if given number is a perfect square
let n = 11

var isSquare = function(n){
    let squareDown = Math.floor(Math.sqrt(n))
    return Math.pow(squareDown,2) === n
}

isSquare(n)



