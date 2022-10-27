// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

let nums = [1,0,1,1,0,1]

var findMaxConsecutiveOnes = function(nums) {
    let newArr = []
    for (let i = 0; i< nums.length; i++){
        if (nums[i] === 1){
            newArr.push(nums[i])
        }else{
            break;
        }
    }return newArr.length
};

findMaxConsecutiveOnes(nums)

//loop through array
//see if value === 1 
//if value === 1, add to new array 
//else if value !== 1, break 
//return length of new array

//ONLY RETURNS LENGTH OF 1ST CONSEC ARRAY****

// hint:
// You need to think about two things as far as any window is concerned. One is the starting point for the window. How do you detect that a new window of 1s has started? The next part is detecting the ending point for this window. How do you detect the ending point for an existing window? If you figure these two things out, you will be able to detect the windows of consecutive ones. All that remains afterward is to find the longest such window and return the size.

//version 1 : brute force

var findMaxConsecutiveOnes = function(nums) {
  let maxCount = 0
  for (let i = 0; i < nums.length; i++){
    let oneCount = 0
    for (let j = i; j < nums.length; j++){
        if (nums[j] == 1)
        oneCount++
        else{
            break
        }
    }if (oneCount > maxCount)
        maxCount = oneCount
  }
  return maxCount
}


//INCOMPLETE
// version 2 : sliding window

var findMaxConsecutiveOnes = function(nums) {
    if (nums == 0)
    return 0

    let maxCount = 0 
    let leftEnd = 0
    while (leftEnd < nums.length){
        if (nums[leftEnd] == 0)
            leftEnd++
    }else{
        let rightEnd = leftEnd
        while (rightEnd < nums.length -1 && nums[rightEnd +1] == 1)
            rightEnd++
    }
}

