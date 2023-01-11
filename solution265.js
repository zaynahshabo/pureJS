// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1
//Steps:
//if typeof a !== typeof b return -1
//if value to lower case = original value, value is lowercase
//same but uppercase
//if a ===upper and b === upper || lower return 1 
//else if not === return 0

let a = 1
let b = "B"
function sameCase(a, b){
    if (typeof(a) !== typeof(b)) {
        return -1
    }else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    }else{
        return 0
    }
}

sameCase(a, b)




