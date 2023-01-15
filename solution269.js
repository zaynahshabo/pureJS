// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

//receive a string, return the opposite case 
//STEPS:
//split the string into an array and test each value against its upperCase value, if true they are equal then convert the value to lowercase, otherwise convert it to uppercase, and either way push to a new array --issues: spaces, other non-letters
//



// "HELLO WORLD"

String.prototype.toAlternatingCase = function () {
    let arr = this.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()){
            arr[i] = arr[i].toLowerCase()
            newArr.push(arr[i])
        }else if (arr[i] === arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase()
            newArr.push(arr[i])
        }
    }return newArr.join('')
}



