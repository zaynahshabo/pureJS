// https://www.codewars.com/kata/5a84d485742ba347b90006b7
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. 



//sort array low to high
let sorted = gifts.sort((a,z) => a-z)
//create an empty storage array
let newArr = []
//create a value placeholder initiated at 0
let sumOfGifts = 0
//if adding sorted[i] <= budget, push to storage array
//return array length as number of gifts can afford

////


let maxBudget = 20
let gifts = [13, 2, 4, 6, 1]

function howManyGifts(maxBudget, gifts){
    let sorted = gifts.sort((a,z) => a-z)    
    let newArr = []
    let sumOfGifts = 0
    for (let i = 0; i <gifts.length; i++) {
        if ((sumOfGifts += gifts[i]) <= maxBudget){
            newArr.push(gifts[i])
        }
    }
    return newArr.length
}

howManyGifts(maxBudget, gifts)




