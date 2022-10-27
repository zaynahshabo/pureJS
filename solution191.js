// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
// The second string argument will always be of length 1

//for loop through first string, if it includes second string, add a ++ to the variable counter


let str = "hello"
let letter = "l"

function strCount(str, letter){  
    let count = 0
    for (let i = 0; i < str.length; i++){
        if (str[i].includes(letter)){
            count++
        }
    }return count
}

strCount(str, letter)


