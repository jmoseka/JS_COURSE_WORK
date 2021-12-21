const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = (this.mass) / (this.height * this.height);
        return this.BMI;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = (this.mass) / (this.height * this.height);
        return this.BMI;
    }
};
mark.calcBMI();
john.calcBMI();

console.log(mark.BMI > john.BMI  ? `Mark's BMI's (${mark.BMI}) is  higher than  John's`
: `John's BMI's (${john.BMI}) is  higher than Mark`);