// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

//NOTES:
//receive a start and an end number, a positive or negative integer, start is always > end
//return the number of numbers between these two values, which does not include a "5" in the number
//STEPS:
//create an array from start to end values
//if array[i].toString() includes() !== true, push to a new array
//return the length of the new array



let start = 1
let end = 9

function dontGiveMeFive(start, end) {
  let arr = []
  for (let i = start; i <= end; i++) {
    if (i.toString().includes(5) !== true) {
        arr.push(i)
    }
  }return arr.length
}


dontGiveMeFive(start, end)





//using a count variable 

let start = 1
let end = 9

function dontGiveMeFive(start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes(5)) {
        count++
    }
  }return count
}


dontGiveMeFive(start, end)


