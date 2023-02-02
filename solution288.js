// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//if character is uppercase, insert a space before push
let string = "camelCase"

function solution(string) {
    let newArr = []
    let arr = string.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()){
            newArr.push(' '+ arr[i])    
        }else{
            newArr.push(arr[i])
        }
    } return newArr.join('')    
}

solution(string)





