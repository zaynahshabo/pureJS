// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// STEP 1 - TURN TO ASCII
    //convert each letter 1 by 1 to ascii code
    //push to new array, USE //Number(array1.join('')) to store as one total
//STEP 3 - REPLACE ANY 7'S WITH 1'S = TOTAL2
//STEP 4 - SUBTRACT TOTAL1 - TOTAL2



////

let x = 'aaaaaddddr'

function calc(x){
    let newArr = []
    for (let i = 0; i < x.length; i++)
        //push each letter to a new array, newArr
        console.log( x.charCodeAt(i), x[i] )
        //rejoin as one number
        let total1 = Number(newArr.join(''))
        //create a string from this numeric value
        let str = total1.toString() 
        //replace each 7 with a 1
        let total2 = str.replace("7", "1")

       console.log (total1, total2)
        let total1B = total1.toString().split('')
        let total2B = total2.toString().split('')

        let toNums = total1B.map(unaryOp)
        let toNums2 = total2B.map(unaryOp)
        function unaryOp(val){
            return +val 
        }
        let sumTotal1 = toNums.reduce((a, c) => a + c)  
        let sumTotal2 = toNums2.reduce((a, c) => a + c)       
}

calc(x)






//////
let x = 'aaaaaddddr'

function calc(x){
    let newArr = []
    for (let i = 0; i < x.length; i++)
        //push each letter to a new array, newArr
        newArr.push( x.charCodeAt(i) )
        //rejoin as one number
        let total1 = newArr.concat()
    console.log(newArr)
        //create a string from this numeric value
        let str = total1.toString() 
        //replace each 7 with a 1
        let total2 = str.replace("7", "1")

       console.log (total1, total2)
        let total1B = total1.toString().split('')
        let total2B = total2.toString().split('')

        let toNums = total1B.map(unaryOp)
        let toNums2 = total2B.map(unaryOp)
        function unaryOp(val){
            return +val 
        }
        let sumTotal1 = toNums.reduce((a, c) => a + c)  
        let sumTotal2 = toNums2.reduce((a, c) => a + c)       
}

calc(x)



//shortest solution
let x = 'aaaaaddddr'

function calc(x){
    return x.split('').map(c => c.charCodeAt(0)).join('').split('').map(Number).filter(x => x === 7).length * 6
}

calc(x)



