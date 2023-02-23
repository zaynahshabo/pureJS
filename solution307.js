// https://www.codewars.com/kata/515dfd2f1db09667a0000003/train/javascript
// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?



let data = {a: 1, b: 2, c: 3}

function keysAndValues(data){
    return [Object.keys(data), Object.values(data)]
}

keysAndValues(data)


