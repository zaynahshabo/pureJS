// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//Notes:
//receive 2 strings of letters a-z
//return a sorted string of all unique values from both strings
//STEPS:
//create a blank storage array
//combine s1+s2 and sort the letters a-z
//loop through combined strings, pushing value to blank array, if it does not includes() 
//return the joined array as a string


function longest(s1, s2) {
    let arr = []
    let newStr = s1+s2
    for (let i = 0; i < newStr.length; i++) {
        if (!arr.includes(newStr[i]) ) {
            arr.push(newStr[i])
        }
    }
    return arr.join('')
}

longest("aretheyhere", "yestheyarehere")





////function longest(s1, s2) {
    let arr = []
    let newStr = s1 + s2
    console.log( newStr.split('')  )
    let sorted = newStr.sort((a,z) => a-z)
    for (let i = 0; i < newStr.length; i++) {
        if (!arr.includes(newStr[i]) ) {
            arr.push(newStr[i])
        }
    }
}

longest("aretheyhere", "yestheyarehere")





