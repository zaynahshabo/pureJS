// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


//-- Notes --//
//receive a string of >= 1, containing letters a-z 
//return a fraction with top = number not from a-m, and bottom the total string length
//Steps
//split s into an array of indiv letters
//if any are === n-z push to a new array
//unshift the length of new array onto placeholder array, arr
//toLowerCase


let s = "aaaxbbbbyyhwawiwjjjwwm"

function printerError(s) {
    let counter = 0
    for (let i = 0; i < s.length; i++) {
         if (s[i] > "m") {
             counter++
        }   
    }
    return counter +"/"+s.length 
}

printerError(s)






