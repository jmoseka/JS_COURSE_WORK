console.log(Math.sqrt(25));
///cubic root
console.log(8 ** (1 / 3));

//max does coercion ("23") but not parsing (25px)
console.log(Math.max(90, 8, 6, 20));

//min exist

//calculate area of a circle

console.log(Math.PI * Number.parseFloat("10") ** 2);

//random number
console.log(Math.trunc(Math.random() * 6) + 1);

//random between two numbers
const randomMint = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomMint(10, 20));

//Rounding Integers

//round method rounds to the nearest integer
//These methods do type coercision

console.log(Math.trunc(23.1)); //trunc removes decimal point

console.log(Math.round(23.5));
console.log(Math.round(6.32));

console.log(Math.ceil(23.5));
console.log(Math.ceil(6.32));

console.log(Math.floor(23.5));
console.log(Math.floor(6.32));

//floor is a little bit better than trunk 23.3 case study
///////////////

///rounding decimals - include the paranthesis on to fiz method
console.log((2.7).toFixed(0)); //tofix will return a string not a number
console.log((2.7).toFixed(3)); //2.25
console.log(+(2.345).toFixed(2));
