// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//receive 1 value
//return array with 3 year values converted to human, cat, and dog years
//create placeholder array
//conditionals for each of the ranges of human years - year 1, year 2, year 3+
//

let humanYears = 10

var humanYearsCatYearsDogYears = function(humanYears) {
    let arr = []
    if (humanYears === 1){
        let dogYears = 15, catYears = 15
        arr.push(humanYears, dogYears, catYears)
    }else if (humanYears === 2) {
        let dogYears = 24, catYears = 24
        arr.push(humanYears, dogYears, catYears)
    }else if (humanYears >= 3) {
        let dogYears = 24 + (humanYears-2)*5, catYears = 24 + (humanYears-2)*4
        arr.push(humanYears, catYears, dogYears)
    }
    
    return arr  
}
 
humanYearsCatYearsDogYears(humanYears)