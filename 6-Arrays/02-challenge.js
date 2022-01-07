const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  //map alters arrays
  const humanAge = ages.map(function (age) {
    if (age <= 2) return 2 * age;
    else if (age > 2) return 16 + age * 4;
  });

  //filter test conditions
  const finalHumanAge = humanAge.filter(function (hAge) {
    return hAge >= 18;
  });

  console.log("General human age: " + humanAge);
  console.log("Adult age: " + finalHumanAge);

  return (
    finalHumanAge.reduce(function (acc, current) {
      return acc + current;
    }, 0) / finalHumanAge.length
  );

  //return (avg = avg / 5);
  //console.log(avg, times);
};

//calcAverageHumanAge(dogAges1);
console.log(calcAverageHumanAge(dogAges1));
console.log(calcAverageHumanAge(dogAges2));
