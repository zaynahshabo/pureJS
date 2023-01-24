// https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

//receive an integer, n
//return the quantity of odd numbers below number n
//steps:
//count up to n, pushing any odd numbers to a new array, using modulus
//return the length of the new array

let n = 15023

function oddCount(n){
    let oddArray = []
    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            oddArray.push(i)
        }
    }return oddArray.length
}

oddCount(n)

