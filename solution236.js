//create a stopwatch that has 4 properties and 3 methods.

let stopwatch = {}

stopwatch.size = 'small'
stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.style = 'waterproof'
stopwatch.brand = 'Nike'

stopwatch.beep = function(){
    console.log("beeeeep beeeep beeeeep!!!")
}

stopwatch.sayBrand = function(){
    console.log(stopwatch.brand)
}

stopwatch.sayStart = function(){
    console.log("start!")
}



//create a mouse object with 4 properties, 3 methods, NO constructor 


let mouse = {}
    mouse.nose = 'pink'
    mouse.feet = 4
    mouse.size = 'tiny'
    mouse.breed = 'wild'

mouse.sound = function() {
    console.log('squeeeeeak!')
}

mouse.song = function() {
    console.log('lala la laaa')
}

mouse.run = function() {
    console.log('run run runnn')
}



//redo mouse with constructor

function MouseMaker(mouseNose, mouseFeet, mouseSize, mouseBreed) {
    this.nose = mouseNose
    this.feet = mouseFeet
    this.size = mouseSize
    this.breed = mouseBreed
    this.sound = function() {
        console.log("squeak")
    }
    this.song = function() {
        console.log("lala la laaa")
    }
    this.run = function() {
        console.log('run run runnn')
    }
}

let mouse1 = new MouseMaker('grey', 4, 'tiny', 'wild')
let mouse2 = new MouseMaker('pink', 3, 'grande', 'tame')

//add properties ***
mouse1.newthing = 'thing1'
mouse1.newthing = mouse2.sound
MouseMaker.prototype.bluetooth = true
//returns true
mousemaker.bluetooth




//build a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function FighterMaker(power, color, size, shape) {
    this.power = power
    this.color = color
    this.size = size
    this.shape = shape

    this.sound = function() {
        console.log('squeee')
    }

    this.move = function() {
        console.log('horse jump')
    }

    this.kick = function() {
        console.log('roundhouse kick to the face')
    }

}

let fighter1 = new FighterMaker('flight', 'red', 'large', 'spiral')



//create a dog object with 4 properties and 3 methods

let dog = {}
    dog.tail = 'fluffy'
    dog.bark = 'gruff'
    dog.mood = 'chipper'
    dog.smile = 'wide'
    
    dog.chase = function(){
        console.log('run run run')
    }

    dog.greet = function(){
        console.log('bork bork bork')
    }

    dog.dance = function(){
        console.log('dancing for a treat')
    }


//create a skater constructor with 4 properties and 3 methods

function MakeSkater(height, weight, speed, skills){
    this.height = height
    this.weight = weight
    this.speed = speed
    this.skills = skills

    this.move = function(){
        console.log('backflip!')
    }

    this.yell = function(){
        console.log('watch out!!!!')
    }

    this.tricks = function() {
        console.log('spin flip')
    }
}

let tonyHawk = new MakeSkater("6'2", 180, '200 mph', 'so many')




