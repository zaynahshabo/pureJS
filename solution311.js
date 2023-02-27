// https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript
// DESCRIPTION:
// Haskell has some useful functions for dealing with lists:

// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]
// Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests


//--
//NOTES:
//receive an array and a function
//return the portion of the array specified by the given function - head, tail, init, last

//STEPS:
//write 4 separate functions
//head- array[0]
//last- array[length-1]
//tail- all but the first
//init- all but the last



let arr = [1,2,3,4,5]

//only the first #
function head(arr) { 
    return arr[0]
}

//only the last #
function last(arr) {
    return arr[arr.length-1]
}

//all but the first #

function tail(arr) {
    return arr.slice(1, arr.length)
}

//all but the last #
function init(arr) {
    return arr.slice(0, arr.length - 1)
}



//weird 
let arr = [1,2,3,4,5]

function tail(arr) {
    console.log(arr.slice(arr[0]), arr.slice(0))
}

tail(arr)