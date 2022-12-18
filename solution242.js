// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

//receive a non-empty array of values
//return the average of the given array, rounded down to nearest integer
//reduce array, divide by array.length, Math.floor round down


let marks = [1,9.5, 107, 12,3,4,5,]

function getAverage(marks){
    let sum = marks.reduce((a,b) => a+b)
    let roundAverage = Math.floor(sum / marks.length)
    return roundAverage
}

getAverage(marks)



