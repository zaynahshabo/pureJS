// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/javascript
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
//receive an integer, n
//return the closest value that is a perfect square
//STEPS:
//find the sq rt of n, and round to the nearest whole number


let n = 5

function nearestSq(n){
    let root = Math.sqrt(n)
    let round = Math.round(root)
    return Math.pow(round, 2)
}

nearestSq(n)


//dry
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)

