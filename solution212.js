// https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript
// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 

//sort lowest to highest
//return arr[pos]

let arr = [2,169,13,-5,0,-1]
let pos = 3

function nthSmallest(arr, pos){
    let sorted = arr.sort((a,z) => a-z)
    return sorted[pos - 1]
}

nthSmallest(arr, pos)




