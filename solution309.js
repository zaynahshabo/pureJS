// https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript
// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:
// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:
// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:
// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.
// Example:
// With the above data your function gps(s, x) should return 74
// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:


//--
//NOTES
//receive an array of numbers, x, and an integer s
//return the floor of max average speed/hr for above values. if x <= 1, return 0.
//HOURLY SPEED FORMULA: 3600 * delta_distance/ s

//STEPS:
    //Speed Formula   S = D / T
    //Hourly Speed Formula   3600 * delta_distance / s  (delta = distance btwn 2 numbers)

//find delta_distance between each consecutive set of variables in array x
    //for loop through array, subtracting x[i+1] - x[i]
//multiply by 3600, divide by s, and push to a new array
//return the floor of the max value of the new array



let x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]
let s = 20

function gps(s, x) {
    let arr = []
    if (x.length <=1) {
        return 0
    }else {
     for (let i = 0; i < x.length -1; i++) {
        arr.push( (x[i+1] - x[i]) *3600 /s )
    }return Math.floor(Math.max(...arr))   
    }
}

gps(s, x)




//refactored
let x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]
let s = 20

function gps(s, x) {
    let arr = []
    return x.length <=1 ? 0 : x.forEach(element => el+1 -el);

}

gps(s, x)


