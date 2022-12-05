// https://www.codewars.com/kata/5a3dd29055519e23ec000074
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// For example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

//receive 2 arrays of individual singe-letters strings
//return a totalScore for the number of matching values: +4 correct, -1 incorrect, +0 for blank answers


let array1 = ["a","b","a","a","a","c","c","a","c","c","b","a","a","c","a","a","a","c","a"]
let array2 = ["c","b","c","","c","c","a","c","c","c","","b","a","","a","c","b","c","b"]

function checkExam(array1, array2) {
    let score = 0
    for (let i = 0; i < array1.length; i++) {
         if ( array2[i] === ''){
             score += 0
        }
        else if (array1[i] === array2[i]){
            score += 4
        }
        else{
            score -= 1
        }
    }
    if (score < 0){
        score = 0
    }return score
}

checkExam(array1, array2)


