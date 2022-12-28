// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

//receive a number
//convert to string
//split the number into an array
//convert to number
//forEach Math.pow(n, 2)

let num = 3212

function squareDigits(num){
    let arr = num.toString().split('')
    let results = []
    for (let i = 0; i < arr.length; i++){
        results.push(arr[i] * arr[i])
    }
    return Number(results.join(''))
}

squareDigits(num)




