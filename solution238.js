// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.
// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

//receive an array with at least 1 item, all positive, non-zero values
//return a tuple - 2 item array representing total of odd indexed in one, and total even indexed in the other
//create two storage variables, sort by odd or even index, return totals as 1 array of 2 values


let array = [29,0]

function rowWeights(array){
    let odds = 0
    let evens = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0 ) {
            odds += array[i]
        }else {
        evens += array[i]         
    }
    }
    return [odds, evens]
}

rowWeights(array)


//refactored
i % 2 === 0 ? arr[0] += arr[i] : arr[1] += arr[i]

