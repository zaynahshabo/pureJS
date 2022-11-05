// https://www.codewars.com/kata/580a4734d6df748060000045
// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//take values of given array and store sorted into ascending and descending order
//check if given array matches either value 


let array = [1,2,3,4]

function isSortedAndHow(array) {
    let arrayAscend = array.sort((a,z) => a-z)
    let arrayDescend = array.sort((a,z) => z-a)
    if(array === arrayAscend){
        return "yes, ascending"
    }else if( array === arrayDescend){
        return "yes, descending"
    }else{
        return "no"
    }
}

isSortedAndHow(array)





let array = [1,5,-9]

function isSortedAndHow(array) {
    let arrayAscend = array.sort((a,z) => a-z)
    let arrayDescend = array.sort((a,z) => z-a)
    if(array === arrayAscend){
        return "yes, ascending"
    }else if( array === arrayDescend){
        return "yes, descending"
    }else{
        return "no"
    }
}


// use spread operator to make a shallow copy with sort instead of overriding array


let array = [1,5,-9]

function isSortedAndHow(array) {
    let arrayAscend = [...array].sort((a,z) => a-z)
    let arrayDescend = [...array].sort((a,z) => z-a)
    if(array === arrayAscend){
        return "yes, ascending"
    }else if( array === arrayDescend){
        return "yes, descending"
    }else{
        return "no"
    }
}

isSortedAndHow(array)






let array = [1,2]

function isSortedAndHow(array) {
    let arrayAscend = [...array].sort((a,z) => a-z)
    if(array === arrayAscend){
        return "yes, ascending"
    }else if( array.reverse() === arrayAscend){
        return "yes, descending"
    }else{
        return "no"
    }
}

isSortedAndHow(array)







let array = [1,2]

function isSortedAndHow(array) {
    let arrayAscend = array.sort((a,z) => a-z)
    if(array === arrayAscend){
        return "yes, ascending"
    }else if( array.reverse() === arrayAscend){
        return "yes, descending"
    }else{
        return "no"
    }
}

isSortedAndHow(array)





//solutions
//https://www.codewars.com/kata/580a4734d6df748060000045/solutions