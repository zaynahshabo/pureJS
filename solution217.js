// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

let word = 'CodEWaRs'

var capitals = function (word) {
    let arr = []
	for (let i = 0; i < word.length; i++){
        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90 )
        arr.push(i)
    } return arr 
};

capitals(word)

