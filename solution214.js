// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


//given an array of three values, return the original index of the middle-range value if they were sorted

//loop through array
//if index arr[i] is both greater than i-1 and less than i+1, return the index 

let triplet = [2,3,1]

function gimme (triplet) {
    let max = Math.max(...triplet)
    let min = Math.min(...triplet)
    for (let i = 0; i < triplet.length; i++){
        if (triplet[i] !== max && triplet[i] !== min){
            return i
        }
    } 
}
gimme (triplet) 
