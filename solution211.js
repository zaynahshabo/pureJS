// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// ie:["1", "2", "3"] to [1, 2, 3]
// Note that you can receive floats as well.
//receive an array of numbers as series of strings
//return array of numbers, may be floats 
//create a blank storage array
//loop through array, convert stringArray[i].


let stringArray = ["1.2", "2", "3"]


function toNumberArray(stringArray){
    let newArr = []
    for (let i = 0; i < stringArray.length; i++){
        newArr.push(Number(stringArray[i]))
    }return newArr
}


toNumberArray(stringArray)





