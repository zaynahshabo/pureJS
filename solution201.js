// https://www.codewars.com/kata/5777fe3f355edbf0a5000d11
// Given a two dimensional array, return the co-ordinates of x.
// If x is not inside the array, or if x appears multiple times, return [].
// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.


let input = [['o', 'x'], ['o'], ['o']]

const xMarksTheSpot = (input) => {
    return [];
}

xMarksTheSpot(input)


//for loop through array
//if value of index contains 'x'
//return the location of that index as [a,b] - indexOf()
//if no x or more than one x, return [] - HOW TO CHECK FOR MORE THAN ONE INDEXOF THE SAME THING???


for (let i = 0; i < input.length; i++){
    if (input[i] === 'x')
    console.log( input[i])
}
//nesting for loops **** READ THIS ****
https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/




/////

let arr = [['o', 'x'], ['o'], ['o']]

function multiplyAll(arr) {
  let final = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    console.log(`Sub-array ${i}: ${arr[i]}`);
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 'x'){
            let final = (arr[i][j])
        }
    } return final 
  }
  // Only change code above this line
 
}

multiplyAll(arr);


//return the coordinates of 'x' in array format, ex) [0, 1] for this input : 

let input = [['o', 'x'], ['o'], ['o']]

const xMarksTheSpot = (input) => {
    let coords = []

    for (let i = 0; i < input.length; i++){
        if (input[i].includes("x")) {
            coords.push([i, input[i].indexOf("x")])
        }
    }
    if (coords.length === 1) {
        return coords[0]
    } else {
        return []
    }
}

xMarksTheSpot(input)

