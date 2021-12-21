let bill_value = 275;
let total_value;
let tip;

bill_value >=50 && bill_value <=300 ?
tip = bill_value * (15 / 100)
: tip = bill_value * (20 / 100);

console.log(`The bill was ${bill_value}, the tip was ${tip} and the total was ${bill_value + tip}`);
