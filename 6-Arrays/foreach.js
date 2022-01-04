const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for

console.log("-----FOREACH------");
movements.forEach(function (
  mvmt,
  i,
  arr //always in that order
) {
  if (mvmt > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mvmt}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mvmt)}`);
  }
});
