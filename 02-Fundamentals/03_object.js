const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
      },
    getSummary: function() {
        return `Jonas is ${this.age} and ${this.hasDriversLicense? "has driving license" : "does not have a driving license"}`;
    }
};

console.log(jonas.calcAge());
console.log(jonas.getSummary());
console.log(jonas.age);