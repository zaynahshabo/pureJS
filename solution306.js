// https://www.codewars.com/kata/5299413901337c637e000004
// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3



//Notes:
//receive a unique, unordered sequence of integers 0-9
//return the missing number in the sequence

//STEPS:
//sort the given array
//check if consecutive numbers
    //loop through and see if arr[i+1] === arr[i] + 1 
//if not, return the non-consecutive


function getMissingElement(superImportantArray){
    let sorted = superImportantArray.sort((a,z) => a-z)
    for (let i = 0; i < superImportantArray.length; i++) {
        if ( superImportantArray[i + 1] !== superImportantArray[i] +1) {
            return (superImportantArray[i] + 1)
        }
    }
}

getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])



