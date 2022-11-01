// https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript
// You love coffee and want to know what beans you can afford to buy.
// The first argument to your search function will be a number which represents your budget.
// The second argument will be an array of coffee bean prices.
// Your 'search' function should return the stores that sell coffee within your budget.
// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

let budget = 5
let prices = [4, 5, 6, 7, 3]

function search(budget, prices) {

}

search(budget, prices)

//return a string of prices separated by commas and no spaces, sorted in ascending order
//if budget is zero, return an empty string
//p: loop through array, if array index == <= budget, add to storage array, then sort storage array, then comma join them and return

let budget = 5
let prices = [4, 5, 6, 7, 3]

function search(budget, prices) {
    let storeNums = []
    for (let i = 0; i < prices.length; i++){
        if ( prices[i] <= budget){
            storeNums.push(prices[i])
        }
    }return storeNums.sort((a,z) => a-z).join(',')
}

search(budget, prices)


