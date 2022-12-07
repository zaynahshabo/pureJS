// https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript
// Given a varying number of integer arguments, return the digits that are not present in any of them.
// Example:
// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

//receive a varying number of integers
//return an ordered string containing all the numbers not present in the above array
//split all numbers into single-digit integers
//check if it includes all digits 0-9
//return any missing values, joined as one string
//map/filter/unnamed arguments


function unusedDigits(...arr) {
    let newArr = (arr).map(element => (element + '').split('').map(Number))
.flat().sort((a,z) => a-z)
    let nums = [0,1,2,3,4,5,6,7,8,9]

   function getDifference (a,b) {
       return a.filter(element => {
           return !b.includes(element)
       })
   }

   return getDifference(nums, newArr).join('')
    
}

unusedDigits(12, 34, 56, 78)


