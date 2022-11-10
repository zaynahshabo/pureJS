// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9



let arr = [1,0,2,3,0,4,5,0]

var duplicateZeros = function(arr) {
    let finalArr = []
    for (let i = 0; i < arr.length; i++){
        finalArr.push(arr[i])
        if (arr[i] === 0)
        finalArr.push(0)
    }
    return finalArr
}


//loop through original array
//create storage array for output
//conditional tests if arr[i] ===0
//if so, push zero to the array in that spot before continuing through array
//output final array with zeros added


//***works in browser, not in leetcode test


