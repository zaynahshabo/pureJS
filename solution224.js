// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

let values = [0,1,2,3,4,5]

function noOdds( values ){
    let arr = []
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
            arr.push(values[i])
        }
    }return arr
}

noOdds( values )


// one line

let noOdds = values => values.filter(x => x % 2 === 0 )
