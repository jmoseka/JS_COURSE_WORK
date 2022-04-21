const Person = function(firstName, birthYear)
{
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// use prototypes to create functions
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

//use prototype to create variables
Person.prototype.species = 'Homo sapiens';

const jonas = new Person('Jonas', 1990);
const mina = new Person('Mina', 1996);
jonas.calcAge();
console.log(mina.species)

// prototype functions and properties are not direct functions and attributes
// of the objects created from the functional constructor
// use .hasOwnProperty to confirm

// checking the objects prototype
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); 

