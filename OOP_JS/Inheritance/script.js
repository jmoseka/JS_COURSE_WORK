class PersonCl{
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }

     hey(){
        console.log('Hey 👋')
    }

    calcAge(){
        return 2020 - this.birthYear
    }
}

class StudentCl extends PersonCl{
    constructor(name, birthYear, course){
        // Always need to come first!
        super(name, birthYear);
        this.course = course;
    }

    // overriding parent class
    hey(){
        console.log('I am a student')
    }
}

const Martha = new StudentCl('Martha Jones', 2012, 'Math')
console.log(Martha)
console.log(Martha.calcAge())
Martha.hey();
