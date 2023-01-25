// https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/javascript
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
// Graph
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

//receive the length of arc A, 1/4 of a complete circle
//return the area of the square
//STEPS:
//math formulas: 
    //circumference: C = 2*pi*r
    //area of a square: A = side^2
//step 1 - find radius of circle: 
    //C = A*4    
    //r = C/2*pi
//step 2 - find area of square:
    //A = r^2

    let A  = 2

    function squareArea(A){
        let circumf = A*4
        let radius = circumf/(2 * Math.PI)
        let squareArea = Math.pow(radius, 2)
        return Number(squareArea.toFixed(2))
    }
    
    squareArea(A)
    


