// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
// If begin value is greater than the end, function should returns 0
// Examples
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

//receive a sequence of 3 numbers representing, beginning, end, and steps incrementing values
//return the sum of numbers from beginning to end, incremented by the "steps" value. return 0 if begin value is greater than end
//steps:
//if begin > end return 0
//else 
    //loop from begin to end, instead of i++ use begin + step to increment
    //return total

const sequenceSum = (begin, end, step) => {
    let sum = 
    if (begin > end ) {
        return 0
    }
    else {
        for (let i = begin; i <= end; i + step) {
            sum += i 
        }
    }
    return sum
};

sequenceSum(1,5,1) 






const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        console.log(0)
    }else{
        for (let i = 0; i <= end; i++){
            console.log(1)
        }
    }
}

sequenceSum(1,5,1) 







