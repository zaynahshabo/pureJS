// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
//sort the array in asc order
//first two values, add and return


let numbers = [52, 76, 14, 12, 4]

function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort((a,z) => a-z)
    return numbers[0] + numbers[1]
}


sumTwoSmallestNumbers(numbers)


