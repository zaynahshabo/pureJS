// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

//receive 3 integer values with above ranges
//return length between 1st and last pillar, non-inclusive of these 2 pillars in centimeters***
//STEPS: 
//total distance between pillars multiply by number of pillars minus 1, *100 to convert to cm
//total pillar width - multiply by number of pillars minus two 

let numPill = 11
let dist = 15
let width = 30

let pillars = (numPill, dist, width) => numPill > 1 ? dist*100*(numPill-1) + width*(numPill-2) : 0

pillars(numPill, dist, width)



