'use strict'

class Person{
    constructor(fullName, birthYear)
    {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    get age() {
        return 2020 - this.birthYear;
    }

    set fullName(name) {
        if (name.length < 5){
            this._fullName = name;
        }  
        else{
            console.log("invalid full names")
        }  
    }
}

//const Jessica = new Person('Jessica', 1995)
//console.log(Jessica.age);

const Mweni = new Person('Jessica Mweni', 1995)
console.log(Mweni)