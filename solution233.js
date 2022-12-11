// https://www.codewars.com/kata/5a34da5dee1aae516d00004a/train/javascript
// Create an identity matrix of the specified size( >= 0).

// Some examples:

// (1)  =>  [[1]]

// (2) => [ [1,0],
//          [0,1] ]

//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]   


//receive a number
//return an array, with a subset of number given of arrays, and number given of elements per each subarray
//first create an empty array
//push "number" number of [] empty arrays to that array



let number = 10

function getMatrix(number) {
    let arr = []
    for (let i = 0; i < number; i++) {
        //add an empty array to the empty outer array
        if (!arr[i]){
            arr[i] = []
        }
        for (let j = 0; j < number; j++) {
            //add a '1' when j is at the same position as i index
            if (i === j) {
                arr[i][j] = 1
            }else{
                arr[i][j] = 0
            }
        }
    }
    return arr
} 

console.log( getMatrix(number) )
