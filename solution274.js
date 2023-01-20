// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


//receive a string input of letters from a..z and A..Z
//return a string value with the following rules:
    //capitalize the first letter of each letter section
        //break the string into an array
        //
    //repeat each respective letter as many times as it's position (1st = 1x, 2nd = 2x)
    //join each letter value with a hyphen


    let s = "ZpglnRxqenU"

    function accum(s) {
        let arr = s.split('')
        let subArr = []
        for (let i = 0; i < arr.length; i++) {
            if (i > 0) {
                subArr.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i))
            }
            else {
                subArr.push(arr[i].toUpperCase())
            }
        }
        return subArr.join('-')
    }
    
    accum(s)
    
    
    
    

