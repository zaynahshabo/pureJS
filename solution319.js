// https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript
// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

//receive a string input
//return true or false, based on whether or not the input matches "hello" in the given languages, without regard to case (it's case-insensitive)
//STEPS:
//convert the greeting to toLowerCase
//create a switch statement 
//use it to check if it includes any of the list of "hello" options
//return true if input matches an item on the list

let greetings = "hello"

function validateHello(greetings) {
    let greetingsLowerCase = greetings.toLowerCase()
        if (
            greetingsLowerCase.includes("hello") ||
            greetingsLowerCase.includes("ciao") ||
            greetingsLowerCase.includes("salut") ||
            greetingsLowerCase.includes("hallo") ||
            greetingsLowerCase.includes("hola") ||
            greetingsLowerCase.includes("ahoj") ||
            greetingsLowerCase.includes("czesc") 
        ) {
            return true;
        }  
            return false;
}

validateHello(greetings)




