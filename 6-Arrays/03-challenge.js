const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogAges) {
  const humanAge = dogAges
    .map((mov) => (mov <= 2 ? 2 * mov : 16 + mov * 4))
    .filter((mov) => mov >= 18);
  const length = humanAge.length;
  return humanAge.reduce((acc, mov) => acc + mov, 0) / length;
};
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
