'use strict'

class PersonCl {
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }

    myName(){
        console.log('My name is ' + this.name);
    }
}

PersonCl.prototype.calcAge = function(){
    console.log(2037 - this.birthYear)
}
const Moseka = new PersonCl("Jamila", 1996);
Moseka.myName();
Moseka.calcAge();

//Methods can be added inside a function or by using prototype
// methods inside class are still treated as the prototype

