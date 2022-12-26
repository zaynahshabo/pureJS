// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
// For example (Input --> Output):
// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

//receive an array of numbers, return second oldest and oldest in that order
//create blank array, sort array high to low, push [0] and unshift [1] to blank array

let ages = [1,5,87,45,8,8]

function twoOldestAges(ages){
    let arr = []
    let sorted = ages.sort((a,z) => z-a)
    arr.push(sorted[0])
    arr.unshift(sorted[1])
    return arr
}

twoOldestAges(ages)


