// https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript
// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.
// Example:
// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

//Notes:
//receive two variables, a string and a positive integer
//return an array listing all words longer than integer, n
//Steps:
//split sentence into an array
//push to a new array any element > n
//return new array of string elements


function filterLongWords(sentence, n) {
    let arr = sentence.split(' ')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > n) {
            newArr.push(arr[i])
        }
    }return newArr
}
 
filterLongWords("The quick brown fox jumps over the lazy dog", 4)




//refactor using filter

function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(el => el.length > n)
}

filterLongWords("The quick brown fox jumps over the lazy dog", 4)




