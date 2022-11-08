// https://leetcode.com/problems/reverse-vowels-of-a-string/
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"
// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

//receive a string of letters only
//return a string with only the vowels -a e i o u - reversed - they may appear in uppercase and multiple times
//create new storage array (empty)
//split string into an array and loop through using a for loop
//if values === ascii for lowercase vowels, ASCII  a-97, e, -101, i- 105, o-111, u-117
//push to new storage array
//reverse array
//return letters to original array (in reversed order) 

let s = "leetcode"

var reverseVowels = function(s) {
    let arr = s.split('')

};

reverseVowels(s)





