// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript
// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
// Return the resulting lamps string. See example tests for more clarity.
//two strings, lamps and drone, lamps is describing how many lamps are in a row, drone describes the position of the drone in ==T if = is passed spots and T is current
//for as many spaces as there are = or T, change that many x's to o's starting at the left side of the string
//return resulting lamps string
//ex) lamps = xxxxx, string = ===T, result = oooox
//p: count the number of = or T's in drone string
//replace() x with lampLength # of o's
//account for lamps length shorter than droneLength
//return converted string

let lamps = "xxxx"
let drone = "====T"

function flyBy(lamps, drone){
    let droneLength = drone.length
    let lampArr = lamps.split('')
    let removed = lampArr.splice(0,droneLength) 
    for (let i = 0; i < droneLength && i <lamps.length; i++){
         lampArr.unshift('o')           
    }return lampArr.join('')
}

flyBy(lamps, drone)



