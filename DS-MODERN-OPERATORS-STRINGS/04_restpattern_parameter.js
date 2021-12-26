//arrays

/*const arr = [1, 2, 5, 7, 3, 0];
const [a, , c, ...others] = arr;
console.log(a, c, others);*/
//1, 5, [7,3,0]

// objects

let opening_hours = {
  monday: {
    open: 9,
    close: 6,
  },
  wednesday: {
    open: 9,
    close: 6,
  },
  saturday: {
    open: 11,
    close: 6,
  },
};

const pizza = {
  ingredients: function (main, ...others) {
    console.log(`Main ingredients: ${main}, Other ingredients: ${others}`);
  },
};

const { wednesday, ...other_days } = opening_hours;
console.log(other_days);

//functions
//adding arbitarry amount of values
//rest pack values as arrays
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(10, 10, 10, 10, 10);
add(30, 40);
const x = [6, 1, 2, 6, 9, 5, 3];
add(...x);

pizza.ingredients("dough", "mozarella", "olives", "tomatoes");
