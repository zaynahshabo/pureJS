// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

//sort array ascending 
//return array.length-1


let list = []

function maxDiff(list) {
    if (list.length === 0){
        return 0
    }else{
    let sorted = list.sort((a,z) => a-z)
    return (sorted[sorted.length-1] - sorted[0])
    }
}

maxDiff(list)



//using ternary

let list = [0,1,2,3,4]

function maxDiff(list) {
    let sorted = list.sort((a,z) => a-z)
    return (list.length === 0 ? 0 : (sorted[sorted.length-1] - sorted[0]))
}

maxDiff(list)



