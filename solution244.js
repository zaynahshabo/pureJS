//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//receive a number, return it's product by 8 if even, 9 if odd


let number = 4

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    }else {
        return number * 9
    }
}

simpleMultiplication(number)


