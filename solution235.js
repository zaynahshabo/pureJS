//create a function that returns heads or tails randomly and as fairly as possible. call the function. 

function coinFlip() {
    let result = Math.random()
    if (result > 0.5) {
        return "heads"
    }else{
        return "tails"
    }
 
}

coinFlip()


//create a function that takes in a number. log the result of heads or tails using the previous function x # of times where x is the number passed into the function. call the function.

let x = 5

function rollIt(x) {
    for (let i = 1; i <= x; i++) {
        let result = coinFlip()
        console.log(result)
    }
}

rollIt(x)



//refactor both functions 
let coinFlip = _ => Math.random() > 0.5 ? "heads" : "tails"
 
function rollIt(x) {
    for (let i = 1; i <= x; i++) {
        let result = coinFlip()
        console.log(result)
    }
}
rollIt(1) 



//sort shows
//create array of shows, print to console without a for loop
let tvShows = ['a', 'b', 'c', 'd']
tvShows.forEach(show => console.log(show))

//create an array of numbers.
let nums = [1,2,5,8,9]
//return a new array that returns only even numbers from previous
let evensOnly = arr => arr.filter(number => number % 2 === 0)
console.log(evensOnly) 

//create a function that takes an array of numbers and alerts the sum of the second-highest and second-lowest numbers
let nums = [1,2,5,8,9]
let sumNums = nums => (nums.sort((a,z) => a-z)[1] + nums.sort((a,z) => a-z)[nums.length-2]) 
sumNums(nums)



