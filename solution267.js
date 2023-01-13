// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.




//receive an array of numbers non-sorted
//return the sum of all the array's numbers, minus the highest and lowest values 
    //if there are multiples of the same value only subtract one
    //if there is an array with only 1 element or an empty list, return 0
//Steps:
//sort array, if value is not at index 0 or array.length-1, push values to a new array and add them, return value

let array = [null]

function sumArray(array) {
    let sort = array.sort()
    let sumArray = []
    for (let i = 0; i < sort.length; i++){
        if (sort.length < 3 || typeof sort[i] !== number){
            return 0
        }
        else if (i !== 0 && i !== sort.length-1 )
        sumArray.push(array[i])
    }return sumArray.reduce((a,c) => a + c) 
}

sumArray(array)










let array = null

function sumArray(array) {
    //set outliers - null, empty array, or less that 3 values in array = 0
        if (typeof array !== Number){
            return 0
        }
        
        else{
            let sort = array.sort()
            let newArray = [] 
            for (let i = 0; i < sort.length; i++){
                if (i !== 0 && i !== sort.length-1){
                    newArray.push(array[i])
                }return newArray.reduce((a,c) => a + c)
            }
        }   
}

sumArray(array) 
    







let array = [ 6, 2, 1, 8, 10 ]

function sumArray(array) {
    //set outliers - null, empty array, or less that 3 values in array = 0
        if (typeof array[0] !== 'number'){
            return 0
        }
        
        else{
            let sort = [...array].sort((a,z) => a-z)
            let newArray = [] 
            for (let i = 0; i < sort.length; i++){
                if (sort[i] !== 0 && sort[i] !== sort.length-1){
                    newArray.push(sort[i])
                    newArray.reduce((a,c) => a + c) 
                }return newArray
            }
        }   
}

sumArray(array) 
    




let array = [ 6, 2, 1, 8, 10 ]

function sumArray(array) {
    //set outliers - null, empty array, or less that 3 values in array = 0
        if (typeof array[0] !== 'number' || array.length < 3){
            return 0
        }
        
        else{
            let sort = [...array].sort((a,z) => a-z)
            console.log(sort)
            let newArray = [] 
            for (let i = 1; i < sort.length-1; i++){
                newArray.push(sort[i])
            }return newArray.reduce((a,c) => a + c)
        }   
}

sumArray(array) 
    








let array = [ 6, 2, 1, 8, 10 ]

function sumArray(array) {
    //set outliers - null, empty array, or less that 3 values in array = 0
        if (typeof array[0] !== 'number' || array.length < 3){
            return 0
        }
        
        else{
            let sort = [...array].sort((a,z) => a-z)
            console.log(sort)
            let newArray = [] 
            for (let i = 1; i < sort.length-1; i++){
                newArray.push(sort[i])
            }return newArray.reduce((a,c) => a + c)
        }   
}

sumArray(array)



