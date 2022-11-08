// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
 

let nums = [2,7,11,15], target = 9

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        let subArray = arr[i]
        for (let j = 0; j < subArray.length; j++){
            target *= subArray[j]
        }
    }
    return target 
};

twoSum(nums, target)



////NOTE TO SELF:
///   THE j[] value is not tracing the entire array, it's only subsetting each i[] value each time
//there will only be a j of 0 and j of 1 if the i has two subsets per pair, for example   *****



