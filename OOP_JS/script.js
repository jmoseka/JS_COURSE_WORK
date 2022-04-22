class PersonCl{
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }

    static greet(){
        console.log("Hey there 👋")
    }

    calcAge(){
        console.log(`${this.name} is ${2037 - this.birthYear} years old`)
    }

}
const Jessica = new PersonCl('Jesee davis', 1995);

//Jessica.greet();
PersonCl.greet()
Jessica.calcAge()

/**
 * Static methods can only be accessed by class or the functional constructor
 * error will occur if an instance of a class tries to access a static method
 */