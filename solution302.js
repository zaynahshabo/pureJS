// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.


//Notes:
//receive a list of strings 
//return a list of strings with elements that are exactly 4 characters in length
//STEPS: 
//create a storage array
//for loop through the provided array, if friend[i].length === 4, push to storage array
//return the storage array



function friend(friends){
    let arr = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            arr.push(friends[i])
        }
    }return arr
}

friend(["Ryan", "Kieran", "Mark"])




//dried
function friend(friends){
    return friends.filter(name => name.length ===4)
}



