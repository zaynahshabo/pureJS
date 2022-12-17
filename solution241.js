// https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript
// Return an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
// Method calling example:
// fizzbuzz(3) -->  [1, 2, "Fizz"]

//receive a number, n
//return all the values from 1 to n, but replace some values with the following:
    //the value is a multiple of three -> "Fizz"
    //the value is a multiple of five -> "Buzz"
    //value is a multiple of 3&5 -> "FizzBuzz"

    let n = 20

    function fizzbuzz(n) {
        let arr = []
    
        for (let i = 1; i <= n; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                arr.push( "FizzBuzz" )
            }else if (i % 3 === 0) {
                arr.push("Fizz")
            }else if (i % 5 === 0) {
                arr.push( "Buzz" )
            }else {
                arr.push(i)
            }
        }
            return arr
    }
        
    fizzbuzz(n)
        
