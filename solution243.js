// https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript
// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
// Let's look at a few examples:
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

//receive an array of positive #'s, and a non-negative number n 
//return the n-th positioned element, raised to the nth power
    //if n outside of array, return -1
//

let array = [1, 2, 3, 4]
let n = 5

function index(array, n){
    let expo = Math.pow(array[n], n)
    if (n > array.length-1) {
        return -1
    }else{
        return expo 
    }
}

index(array, n)
