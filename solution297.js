// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.

//Notes:
//receive a string of characters
//return as string, the middle 1 or 2 characters based on if string length is even(2) or odd (1)
//STEPS:
//




function getMiddle(s) {
    let final = ''
    for (let i = 0; i < s.length; i++) {
        if (s.length % 2 === 0) {
            final = s[s.length/2 -1] + s[s.length/2]
        } else {
            final = s[s.length/2 -.5]
        }  
    }
    return final
}

getMiddle("tes")




//refactored

function getMiddle(s) {
    let final = ''
    let l = s.length/2
    for (let i = 0; i < s.length; i++) {
        if (l % 2 === 0) {
            final = s[l - 1] + s[l]
        } else {
            final = s[l -.5]
        }  
    }
    return final
}

getMiddle("tes")


let arr = s.split('')

arr.filter(el => el.length/2)





