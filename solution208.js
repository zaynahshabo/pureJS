// https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript
// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example: "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",2 ,5), "around-around-around-around-around"

// modifyMultiply ("This is a string",3,5) 


let str = "this is a string"
let loc = 3
let num = 5

function modifyMultiply (str,loc,num) {
    let finalArr = []
    let arrStr = str.split(' ')
    for (let i = 0; i <num; i++){ 
        finalArr.push(arrStr[loc])
    }
    return finalArr.join('-') 
} 

modifyMultiply (str,loc,num)

//create storage array
//convert string to array
//find word at index specified by loc
//push word to storage array
//join array with hyphens and return string as final result



