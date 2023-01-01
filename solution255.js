// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//steps:
//break string into an array, if arr[i] !== '!' push to new array


let s = "HEY THERE! Hi there!!! Ho there?!"

function removeExclamationMarks(s) {
    let arr = []
    let arrS = s.split('')
    console.log(typeof arrS)
    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i] !== '!') {
            arr.push(arrS[i])
        }
    }
    return arr.join('');
}

removeExclamationMarks(s)




