const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//accumulator (acc) is like a snowball
const balance = movements.reduce(function (acc, current, index, arr) {
  console.log(`iteration ${index}: is ${acc}`);
  return acc + current;
}, 0); //initial value - start counting at zero

console.log(balance);
