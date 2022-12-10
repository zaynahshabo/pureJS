// https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript
// val = your value to the organisation
// happiness = her happiness level at the time of asking and finally
// The numbers of letters from 'sabbatical' that are present in string s.
// Note that if s contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.
// If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'


//split s into an array
//create array that holds [s,a,b,t,c,i,l]
//create empty counter variable, count
//find number of letters in string, s, that are present in the word 'sabbatical' - one point for each instance in s, not "sabbatical"
//if 3 parameters >33 = yes


//long brute force way
let s = 'Please calm down'
let val = 9
let happiness = 1

function sabb(s, val, happiness){
    let count = 0
    let arr1 = s.split('')
    let arr2 = ['s','a','b','t','c','i','l']

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                count++
            }
        }
    }
    if ((count+val+happiness) >22) {
        return 'Sabbatical! Boom!'
    }else{
        return 'Back to your desk, boy.'
    }
}

sabb(s, val, happiness)





//refactored using some() method

let s = 'Please calm down'
let val = 9
let happiness = 1

function sabb(s, val, happiness){
    let arr1 = s.split('')
    let arr2 = ['s','a','b','t','c','i','l']

    return arr1.some(item => arr2.includes(item))

}

sabb(s, val, happiness)

