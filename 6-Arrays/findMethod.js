/**
 * FIND METHOD- retrieves an element of array based on the
 * condition
 *
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWitdrawal = movements.find((mov) => mov < 0);
console.log(firstWitdrawal);
