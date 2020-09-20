//ES5
/*function Person(fullName, favColour) {
    this.name = fullName;
    this.favouriteColour = favColour;
    this.greet = function() {
        console.log(`Hello bro, my name is ${fullName} and my Favourite colur is ${favColour}`);
    }
}*/
 
//ES6
class Person {
    constructor(fullName, favColour) {
        this.name = fullName;
        this.favouriteColour = favColour;
    }
    
    greet() {
        console.log(`Hi bro, my name is ${this.name} and my Favourite colur is ${this.favouriteColour}`);
        // console.log("Hi there " + this.name + " What color is " + this.favouriteColour);
    }
    
    
}

// module.exports = Person;

export default Person;