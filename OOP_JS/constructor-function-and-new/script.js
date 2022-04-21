const Person = function(firstName, birthYear)
{
    this.firstName = firstName;
    this.birthYear = birthYear;

    //logs every object created from this constructor
    //console.log(this);

    // NEVER CREATE FUNCTIONS INSIDE A CONSTRUCTOR AS ALL THE OTHER
    // OBJECTS WILL INHERIT ALL THOSE FUNCTIONS

    /*this.calcAge = function() {
        console.log(2037 - this.birthYear);
    }*/
}

const jonas = new Person('Jonas', 1990);
const mina = new Person('Mina', 1996);
console.log(jonas);
console.log(mina)
// 1. New empty object {} is created
// 2. function is callled, this keyword is set to the newly created empty object
// this = {}
// 3. Newly created object is linked to prototype
// 4 function automatically return {}