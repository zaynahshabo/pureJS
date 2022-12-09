// https://www.codewars.com/kata/56c22cdbe0c0f7cae2001789/train/javascript
// Given an array of integers, calculate the Average of these numbers.
// Main challenge is to write shortest and compact function for it.
// For example: var a = [0, 1, 2];
// avg(a) // output should be 1
// Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.

let a = [0, 1, 2, 3, 4]

function avg(a){
    return ( a.reduce((a,z) => a+z)    / a.length)
}

avg(a)



//arrow 
let avg = (a) => ( a.reduce((b,c) => b+c)/a.length )


    