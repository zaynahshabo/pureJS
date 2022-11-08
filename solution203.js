// https://leetcode.com/problems/valid-palindrome/
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


//convert original string to lowercase, no spaces or symbols
//filter for non-lowercase letters and non-numbers
//convert original string to reverse of self
//if the two are === strict equals return true


let s = "0P"
var isPalindrome = function(s){
    let sNeutral = s.toLowerCase().split(' ').join('')
    console.log(sNeutral)
    let finalArr = []
    for (let i = 0; i < s.length; i++)
        if ( ( sNeutral.charCodeAt(i) >= 97 && sNeutral.charCodeAt(i) <=122 ) 
            || 
            ( sNeutral.charCodeAt(i) >= 48 && sNeutral.charCodeAt(i) <=57 ) )
        {finalArr.push(sNeutral[i])}
        let finalStr = finalArr.join('')
        let revFinStr = finalArr.reverse().join('')
        return (finalStr === revFinStr )
}

isPalindrome(s)

