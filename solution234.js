// https://www.codewars.com/kata/581de9a5b7bad5d369000150/train/javascript
// SCHEDULE YOUR DA(RRA)Y
// The best way to have a productive day is to plan out your work schedule. Given the following three inputs, please create an an array of time alloted to work, broken up with time alloted with breaks:
// Input 1: Hours - Number of hours available to you to get your work done!
// Input 2: Tasks - How many tasks you have to do througout the day
// Input 3: Duration (minutes)- How long each of your tasks will take to complete
// Criteria to bear in mind:
// Your schedule should start with work and end with work.
// It should also be in minutes, rounded to the nearest whole minute.
// If your work is going to take more time than you have, return "You're not sleeping tonight!"
// Example:
// dayPlan(8, 5, 30) == [ 30, 83, 30, 83, 30, 83, 30, 83, 30 ]
// dayPlan(3, 5, 60) == "You're not sleeping tonight!"

//receive 3 integer values, representing: 
// a- time in hours, b- number of tasks, and c- time in minutes required to perform the task
//return not sleeping message if impossible, or an array of proposed schedule if possible - with time to complete task, then breaks, etc until tasks complete
//math- if a*60 >= b * c 
    //return schedule = [c, breaktime, c, ...]
    //breaktime = Math.ceil on (a*60 - b*c)  /  (b - 1)
    //else return "no sleep" message

    function dayPlan (hours, tasks, duration) {
        let schedule = []
        let breakTime = Math.round ( (hours*60 - tasks * duration)  /  (tasks - 1) )
        if (hours * 60 < tasks * duration) 
            return "You're not sleeping tonight!";
        
            for (let i = 1; i < tasks; i++) 
                schedule.push(duration , breakTime)        
                schedule.push(duration)
        return schedule
    }


    
