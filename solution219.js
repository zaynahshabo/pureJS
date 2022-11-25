// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

    //loop the subset values array of each of the 3 subsets
    //push them all to storage array as you loop
    //return sorted storage array 
    // return array;



let array = [[3, 2, 1], [7, 9, 8], [6, 4, 5]]

function flattenAndSort(array) {
    let storage = []
    //loop through the outmost array
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++) {
            storage.push(array[i][j])
        }
    }
    return storage.sort((a,z) => a-z) 
}

flattenAndSort(array)




