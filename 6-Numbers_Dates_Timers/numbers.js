///3 WAYS TO CONVERT STRING TO JAVA

/**
 * 1. Using Number()
 * 2. Using coerced conversion +
 * 3. Using parseInt()
 */
const number = "123";
const no = "12pe";

console.log(Number(number));
console.log(+number);
console.log(Number.parseFloat("25px"));

///parseInt takes 2 args: 10 is specificying decimal form
console.log(Number.parseInt(no, 10));

//check if a value is a real number and not a string: USE IS A FINITE
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
