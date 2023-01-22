// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


//receive a string or empty string, only input will be letters
//return true is an isogram or false isn't (an empty counts as true, letter case can be ignored)
//STEPS:
//split string to array
//loop through array, pushing each value to a new array
//if array1 includes array2 === true, return false and vice versa

let str = "Dermatoglyphics"

function isIsogram(str) {
    str = str.toLowerCase()
    
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) >= 0) {
        return false
      }
    }
    
    return true
}

isIsogram(str)

