// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//given an integer 1-12, represents months
//return what quarter of the year, as an integer number 1-4
//steps:
//set a series of if-statements applying to each quarter - 
//1-3  =1st
//4-6  =2nd
//7-9  =3rd
//10-12  =4th



let month = 3

const quarterOf = (month) => {
    if (month <= 3) {
        return 1
    }
    else if (month <=6) {
        return 2
    }
    else if (month <= 9) {
        return 3
    }
    else if (month <=12) {
        return 4
    }
}

quarterOf(month)



//or
let quarterOf = m => Math.ceil(m/3)

