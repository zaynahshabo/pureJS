// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

let numbersArray = [12, 13, 14]

function getEvenNumbers(numbersArray){
    return numbersArray.filter(elem => elem % 2 === 0)
}

getEvenNumbers(numbersArray)




//refactored 
//one line
let getEvenNumbers = numbersArray => numbersArray.filter(elem => elem % 2 === 0)

//using anon func
function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}

