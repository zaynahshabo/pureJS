// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

//receive array of positive or negative integers
//return an array of their squared values, sorted into ascending order
//loop through original array and place in new array holder
//sort numbers low to high


let nums = [-4,-1,0,3,10]

var sortedSquares = function(nums) {
    let newArr = []
    for ( let i = 0; i < nums.length; i++){
        newArr.push(Math.pow(nums[i],2))
    }return newArr.sort((a,b) => a - b)
}

sortedSquares(nums)

