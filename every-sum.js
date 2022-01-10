const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const neg = [-1, -2, -3];

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const some = movements.some((mov) => mov > 0);
const every = movements.every((mov) => mov < 0);
console.log(some + " " + every);
