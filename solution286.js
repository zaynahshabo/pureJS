// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
// Write a function that checks if a given string (case insensitive) is a palindrome.

//receive a string containing a word
//return true or false if the word is a palindrome
//STEPS:
//create a holder array and another array to hold the split string values
//loop through and unshift each value to the new array
//conditional statement to test if the rejoined holder array is equal to the original string value
//make values case- insensitive


let x = "raTs live on no evil star"

function isPalindrome(x) {
    let newArr = []
    let stringArr = x.toLowerCase().split('')
    for (let i = 0; i < stringArr.length; i++) {
        newArr.unshift(stringArr[i])
    }
    if (newArr.join('') === x.toLowerCase() ) {
        return true
    }else {
        return false
    }
}

isPalindrome(x)



//use reverse and dry code:


let x = "raTs live on no evil star"

function isPalindrome(x) {
    let reverseString = x.toLowerCase().split('').reverse().join('')
    return reverseString === x.toLowerCase()
}

isPalindrome(x)



//dryest

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase()


