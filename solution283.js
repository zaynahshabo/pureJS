// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
// Define a function that removes duplicates from an array of numbers and returns the resulting array.
// The order of the sequence has to stay the same.

//steps:
//create new storage array
//loop through array 
//if doesnt include value, push to new array


let a = [1,2,1]

function distinct(a) {
    let newArr = []
    for (let i = 0; i < a.length; i++) {
        if (!newArr.includes(a[i])) {
            newArr.push(a[i])
        }
    }return newArr
}

distinct(a)






