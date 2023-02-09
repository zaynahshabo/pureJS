// https://www.codewars.com/kata/55ed875819ae85ca8b00005c/train/javascript
// Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.

//Notes:
//receive an array and a numeric multiplier
//return array containing values multiplied by number, filtering all non-numeric values
//Steps:
//loop through array, if the element's value !isNaN, multiply by multiplier
//return array

//long version
function multiplyAndFilter(array, multiplier){
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            newArr.push(array[i] * multiplier)
        }
    }
    return newArr
}

multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3)


//refactored


function multiplyAndFilter(array, multiplier){
    return array.filter(el => typeof el == 'number').map(el => el * multiplier)
}

multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3)





