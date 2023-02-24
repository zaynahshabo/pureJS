// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.
// Return as a number.

//--
//NOTES:
//receive array with both string and number integers
//return the difference btwn number - string integers

//STEPS:
//create placeholder values for each total type, string vs num
//loop through array
//find total of numbers
//find total of string-numbers
    //convert string-num
    //add
//return numTot - stringTot



function divCon(x){
    let numTot = 0
    let stringTot = 0
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'number') {
            numTot += x[i]
        } else {
            stringTot += Number(x[i])
        }
    } return (numTot - stringTot )
}

divCon([9, 3, '7', '3'])






//refactored


function divCon(x){
    let numTot = 0
    let stringTot = 0
    return typeof x[i] === 'number' ? numTot += x[i] : stringTot += Number(x[i])
}

divCon([9, 3, '7', '3'])



