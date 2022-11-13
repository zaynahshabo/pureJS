// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

//receive an array of integers
//return the minimum sum of 2 of the array's integers
//array will always be even and contain positives only
//example 5,4,2,3 - return 22
//achieve by adding the most opposite values outward to inward until reach middle two values - ie, start with highest and lowest, then next highest and next lowest, etc "inward" if they are arranged sorted in order

//sort the array sequentially
//do inner function to multiple the highest and lowest 
//push to a new array
//then multiple next highest and lowest, push, repeated until done

let arr = [5,4,2,3]

function minSum(arr){

}

minSum(arr)




////

let arr = [5,4,2,3]

function minSum(arr){
    let sorted = arr.sort((a,z) => a-z)
    console.log(sorted)
    let products = []
    console.log(products)
    for (let i = 0; i < arr.length; i++){
        let multi = sorted[i] * (sorted.length-1)
        console.log(multi)
    }
}

minSum(arr)



