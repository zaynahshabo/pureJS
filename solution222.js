// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript
// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
// If you do, return 'Clean', else return 'Cr@p'.
// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
// For example:
// x=
// [[_,_,_,_,_,_]
// [_,_,_,_,@,_]
// [@,_,_,_,_,_]]
// bags = 2, cap = 2
// return --> 'Clean'


//NOTES on problem
//receive 2D array "x", number of bags "bags", and # capacity "cap"
    //x may or may not contain a value "D" - if so return 'Dog!!'
//return 'Dog!!' if "D" present in array
//return 'Clean' if yes
    //else return 'Cr@p' if no
//yes or no determined by bags x cap > < = to number of '@' symbols

//STEPS

//set a counter variable to 0
//use a nested loop to pass through outer and inner arrays
//if contains a 'D' value - return 'Dog!!'
//else
//tally the number of '@' symbols with counter variable
//set totalCapacity = bags * cap
//return 'Clean' if true, 'Cr@p' if false to # @'s <= totalcapacity



let x = [['_','_'], ['_','@'], ['D','_']]
let bags = 2
let cap = 2

function crap(x, bags, cap){
    let crapCount = 0
    for (let i = 0; i < x.length; i++){
        for (let j = 0; j < x[i].length; j++){
            let dog = 'D'
            if (x[i][j].includes(dog)) {
                return ('Dog!!')
            }else{
                if (x[i][j].includes('@')) {
                crapCount++ 
                }         
            }
        }
    }return (crapCount <= (bags * cap) ? 'Clean' : 'Cr@p' )
}
crap(x)





