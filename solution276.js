// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//receive a string of letters
//return true if the # of x's and o's are equal, false if not. if there are none of either, return true
//steps:
//for loop through string, save x and o's in own variables, compare and if equal return true, else false

let str = "xox"

function XO(str) {
    let countX = 0
    let countO = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            countX += 1
        }else if (str[i].toLowerCase() === 'o') {
            countO += 1 }

    }
    console.log(countX, countO)
    if (countO === countX) {
        return true
    }else {
        return false

    }
}

XO(str)


