// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]




//Notes:
//receive array of arrays, each containing 2 elements
//return an array of strings stating "Senior" or "Open" for each of the above sub-arrays
    //return Senior if age >= 55 && handicap > 7, else return Open
//STEPS:
//for loop through outer array
//if data[i][0] >= 55 && data[i][1] > 7 return Senior
//else return Open


function openOrSenior(data){
    let answer = []
    for (let i = 0; i < data.length; i++) {
        if ( data[i][0] >= 55 && data[i][1] > 7 ) {
            answer.push("Senior") 
        } else {
            answer.push("Open")
        }
    } return answer
}

openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])



//dried
function openOrSenior(data){
    let answer = []
    for (let i = 0; i < data.length; i++) {
        data[i][0] >= 55 && data[i][1] > 7 ? answer.push("Senior") : answer.push("Open")
        }return answer
} 



//map 
function openOrSenior(data) {
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open')
}

openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])



