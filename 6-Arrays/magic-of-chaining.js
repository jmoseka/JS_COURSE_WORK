const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

// PIPELINE
const totalDepositInUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUSD)

  //incase of troublshooting
  /*.map((mov, i, arr) => {
    console.log(arr);
    return mov * euroToUSD;
  })*/
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositInUSD);
