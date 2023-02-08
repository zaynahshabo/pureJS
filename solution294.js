// https://www.codewars.com/kata/58308360aeb69a460b0002b2/train/javascript
// In this kata your task is to remove all the duplicates from the array using a standard build-in method - Array.prototype.filter(); return the array containing unique values only.
// Tip: use the index of value(s) to solve this kata
// If you are not familiar with filter() - info is here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// For example:
// var arr = [4];
// unique(arr); // should return [4]
// var arr = [1,1,1,2,2,3];
// unique(arr); // should return [1,2,3]

//Notes:
//receive an array of values
//return an array with only one of each value, all duplicates removed, using filter()
//STEPS: 
//create new storage array
//using for loop, filter for elements that are the indexOf() el and push to new array


//// works but must use filter()
function unique(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i]) !== true){
            newArr.push(arr[i])        
        }
    }return newArr
}

unique([1,2,3,4,4,4,5,6,7,7,8,0,0,0])


//using filter(), set

function unique(arr) {
    let mySet = new Set()
    let myVal = new Set([...arr].filter((x) => !mySet.has(x)))
    return Array.from(myVal)
}
unique([1,2,3,4,4,4,5,6,7,7,8,0,0,0])


//cleanest
function unique(arr) {
    return arr.filter((x,i) => arr.indexOf(x) === i)
}


