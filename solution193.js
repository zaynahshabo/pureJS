// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
// If you can, try writing it in only one line of code.
//receive an integer number and a limit number
//return an array of their multiples up to an including both integer and and limit if applicable
//for loop from integer to limit
//if their division modulus 0, add to new storage array

let integer = 2
let limit = 6

function findMultiples(integer, limit) {
    let finalArr = []
    for (let i = integer; i <= limit; i++){
        if (i % integer === 0){
            finalArr.push(i)
        }
    }return finalArr
}
  
findMultiples(integer, limit)



