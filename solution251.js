// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.


//receive a string 
//return a string with all vowels removed
//STEPS
//create empty array, turn string into lower case, split string into an array, for loop through it, filter vowels, push letter to new array, join new array and return new string


let str = "Ok hello goodbye"

function disemvowel(str) {
    let vowel = 'aeiou'
    return str.split('').filter(letter => !vowel.includes(letter.toLowerCase())).join('')
}

disemvowel(str)


