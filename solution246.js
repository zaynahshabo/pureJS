// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
//RENTAL COSTS:
//  $40/day, > 7days -$50off total, >3days -$20off
// numDays *40 = base rate
//if baserate> 3 return total -20, if baserate>7 return total -50

let d = 7

function rentalCarCost(d) {
    let baseRate = 40*d
    if (d >= 3 && d < 7) {
        baseRate -= 20
    }else if (d >= 7) {
        baseRate -= 50
    }
    return baseRate
}

rentalCarCost(d)