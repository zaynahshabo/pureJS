// https://www.codewars.com/kata/5b609ebc8f47bd595e000627/train/javascript
// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).
// input
// Two arrays are given :
// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :
// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :
// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// value of G = 6.67 × 10−11 N⋅kg−2⋅m2
// 1 ft = 0.3048 m
// 1 lb = 0.453592 kg
// return value must be Newton for force (obviously)
// μ copy this from here to use it in your solution

//NOTES:
//gravitational force = (grav constant * mass of obj1 * mass of obj2) 
                    //    / (distance btwn centers of objects squared)
//Newton is 1 kg*m/s2
    
//receive 2 arrays - 
    //arr+val  -  3 elements: mass obj1, mass obj2, distance btwn centers
    //arr_unit - 3 elements: unit for obj1 mass, unit for 2, unit for dist btwn centers
//return the gravitational force in Newtons, between the 2 objects
//steps:
//declare gravitational force constant
//adjust units of each object to match Newton: kg, m
    //if arr_unit[0] === "kg" && arr_unit[1] === "m"
        //return the result of the equation (gravForce * obj1mass * obj2mass ) / distance btwn 2 objects *Squared*
    //else convert values from arr_val
        //mass: look at arr_unit[0] and arr_unit[1]
                //operates on arr_val[0] and arr_val[1]
            //if === gram, then / 1000 
            //if === mg, then / by 1e+6
            //if === μg, then / by 1e+9
            //if lb, / 2.205
        //distance: look at arr_unit[2]
                    //but converts arr_val[2]
            //if === cm, then / 100
            //mm / 1000
            //μm / 1e+6
            //ft / 3.281
    //push converted values to a new array, convertedVals
    //then return according to above formula, using convertedVals instead
    


    solution = (arr_val, arr_unit) => {
        let gravForce = 6.67e-11
        if (arr_unit[0] === 'kg' && arr_unit[1] === 'm') {
            return (gravForce * arr_val[0] * arr_val[1]) / Math.pow(arr_val[2],2)
        }
        else {
            //convert mass -gram
            if (arr_val[0] || arr_val[1] === "g") {
                arr_val[0] /= 1000
                arr_val[1] /= 1000
            }
            //convert mass- milligram
            else if (arr_val[0] || arr_val[1] === "mg") {
                arr_val[0] /= 1e+6
                arr_val[1] /= 1e+6
            }
            //convert mass - microgram
            else if (arr_val[0] || arr_val[1] === "μg") {
                arr_val[0] /= 1e+9
                arr_val[1] /= 1e+9
            }
    
            //convert mass - pounds
            else if (arr_val[0] || arr_val[1] === "lb") {
                arr_val[0] /= 2.205
                arr_val[1] /= 2.205
            }
    
            //convert distance - cm
            if (arr_val[2] === 'cm') {
                arr_val[2] / 100
            }
    
            //convert distance - mm
            else if (arr_val[2] === 'mm') {
               arr_val[2] / 1000 
            }
    
            //convert distance - micrometer
            else if (arr_val[2] === 'μm') {
               arr_val[2] / 1e+6 
            }
    
            //convert distance - feet
            else if (arr_val[2] === 'ft') {
               arr_val[2] / 3.281 
            }
    
            return (gravForce * arr_val[0] * arr_val[1]) / Math.pow(arr_val[2],2)
        }
    
    };
    
    solution([1000,1000,100], ["kg", "kg", "cm"])



////solution

function solution([m1,m2,d],[um1,um2,ud]) {
    const G = 6.67e-11 ;
    const conversion = { kg:1, g:1e-3, mg:1e-6, μg:1e-9, lb:.453592
                       , m:1, cm:1e-2, mm:1e-3, μm:1e-6, ft:.3048
                       } ;
    return G * m1 * conversion[um1] * m2 * conversion[um2] / ( d * conversion[ud] ) ** 2 ;
  }
  solution([1000,1000,100], ["kg", "kg", "cm"])