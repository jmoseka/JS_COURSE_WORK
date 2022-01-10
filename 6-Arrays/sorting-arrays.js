const owners = ["Jonas", "Zach", "Adam", "Martha"];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(owners.sort());

//how to sort numbers

//return < 0, A, B
//return > 0, B,A

//ASCENDING
movements.sort((a, b) => a - b);

console.log(movements);

//descending
movements.sort((a, b) => b - a);
console.log(movements);
