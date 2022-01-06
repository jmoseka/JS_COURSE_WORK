/*
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data'
For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")

Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
*/

let julia = [9, 16, 6, 8, 3];
kate = [10, 5, 6, 1, 4];
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  //can also use concat
  //can also use slice?
  const finalDogs = [...dogsJuliaCorrected, ...dogsKate];
  finalDogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dog} years old 🐕`
      );
    } else {
      console.log(`Dog number ${i + 1} is a puppy, and is ${dog} years old 🐶`);
    }
  });
};

checkDogs(julia, kate);
