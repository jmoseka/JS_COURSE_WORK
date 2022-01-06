const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  return mov * euroToUsd;
});

/*
Using arrow functions
const movementUSD = movements.map(mov => mov * euroToUsd);
*/
console.log(movements);
console.log(movementsUsd);

//passin call back function. map calls the function
const movementDesc = movements.map(function (mov, i) {
  return `Movement ${i}: You ${mov > 0 ? "deposited " : "withdrew "}${Math.abs(mov)}`;
});
console.log(movementDesc);
