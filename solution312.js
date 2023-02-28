// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//--
//NOTES:
//receive two strings
//return true if string a ends in string b
//STEPS:
//get length of string b
//check if the length of string b number of characters of string a are the same as string b

let str = "abcde"
let ending = "cde"

function solution(str, ending){
    let endingA = str.slice(str.length - ending.length) 
    return endingA === ending
}

solution(str, ending)



//refactored
let str = "abcde"
let ending = "cde"

const solution = (str, ending) => ending === str.slice(str.length - ending.length) 

solution(str, ending) 


//using endsWith():
const solution = (str, ending) => str.slice(str.length - ending.length).endsWith(ending)






