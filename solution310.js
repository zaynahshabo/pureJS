// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"



//--
//Notes:
//receive a string of numbers of any length
//return all numbers but the last 4 changed to ###### symbol

//STEPS:
//loop through string, up to string.length-4
//push "#" to a new array for as many times as the loop runs
//push last 4 digits to the new array
//return the array joined as a string


function maskify(cc) {
    let arr = []
    if (cc.length > 4) {
        for (let i = 0; i < cc.length-4; i++) {
        arr.push('#')
    } arr.push(cc.slice(cc.length-4, cc.length))
        return  arr.join('')    
    }else {
        return cc 
    }
}

maskify('4fg')




//refactored

function maskify(cc) {
    let arr = []
    if (cc.length > 4) {
        for (let i = 0; i < cc.length-4; i++) {
        arr.push('#')
    } arr.push(cc.slice(cc.length-4, cc.length))
        return  arr.join('')    
    }else {
        return cc 
    }
}

