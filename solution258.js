// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//receive an array of strings and numbers combined
//return a new array with only the numbers included
//steps:
//create storage array, for loop through using typeof to check the type, push only numbers to storage array, return new array

let l = [1,2,'a','b']

function filter_list(l) {
    let newArr = []
    for (let i = 0; i < l.length; i++) {
        if ( typeof l[i] == 'number') {
            newArr.push(l[i])
        }
    }
    return newArr
}

filter_list(l)


