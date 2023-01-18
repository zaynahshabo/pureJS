// https://www.codewars.com/kata/5250a89b1625e5decd000413/train/javascript
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

//receive an array of array objects (may be numbers, or may be array of arrays)
//return an array, with one level of flattening 
//STEPS
//use array.flat() method to reduce by 1 layer, return result

let array = [[1, 2, 3], [1, 2, 3]]

var flatten = function (array){
    return array.flat()
}

flatten(array)


