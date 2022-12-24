// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//receive 3 # scores, find the GPA and return grade in letter form
//add scores, divide by 3
//using if, else if, else statements match grade to letter equivalent, return letter


let s1 = 95
let s2 = 90
let s3 = 93

function getGrade (s1, s2, s3) {
    let gradeLetter = ''
    let gradeAverage = (s1 + s2 + s3) / 3
    if (gradeAverage >=90 && gradeAverage <= 100) {
        return 'A'
    } else if (gradeAverage >= 80 && gradeAverage < 90) {
        return 'B'
    } else if (gradeAverage >= 70 && gradeAverage < 80) {
        return 'C' 
    } else if (gradeAverage >= 60 && gradeAverage < 70) {
        return 'D'
    } else {
        return 'F'
    }
}

getGrade(s1, s2, s3)


