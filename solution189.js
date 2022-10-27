// https://www.codewars.com/kata/582e0e592029ea10530009ce
// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
// Task: Given an array of Player objects and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)
// Example:
// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

//receive an array of letters "players" and a number, "goose"
//using 1-based indexing, return the letter at the index of goose
//if goose > length of players, loop through from the beginning, ie, 4 players but given a 5, returns the 1-indexed item
//for loop through array, returning value of players[goose index +1]
//if players[goose+1] > players.length, return players[goose+1 - players.length]

let players = ['a','b','c','d']
let goose = 7

function duckDuckGoose(players, goose) {
    let newIndex = goose -1
    if (newIndex > players.length){
      return players[newIndex % players.length].name
    }else{
        return players[goose - 1].name
    }
}

duckDuckGoose(players, goose)


