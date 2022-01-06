const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///creating an array of deposits - movements above 0

const deposits = movements.filter(function (mov) {
  return mov > 0; //condition if true, make it to deposit array
});
const withdrawals = movements.filter((mov) => mov < 0);
console.log(deposits);
console.log(withdrawals);
