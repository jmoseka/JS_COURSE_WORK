////////////////////////////////////////////
let arr = ["a", "b", "c", "d", "e", "g"];

//slice method - take part of array without changing original
//array

//display at position 2 - 4,   c  and  d
//console.log(arr.slice(2, 4));
//ca n define  a  negative arg
//console.log(arr.slice(-2));
///from position 1 to the last 2
//console.log(arr.slice(1, -2));
//create a shallow copy of array
//console.log(arr.slice());
//same as console.log([...arr])

/*SPLICE - changes original array
console.log(arr.splice(2));
//usecase: remove the last element of an array
console.log(arr.splice(-1));
//removes element at the specified position
console.log(arr.splice(1, 2));
console.log(arr);
*/

//REVERSE
const arr2 = ["k", "j", "h", "g", "x"];
//mutates the original array
//console.log(arr2.reverse());

//CONCAT
const letters = arr.concat(arr2);
//or console.log(...arr, arr2)
console.log(letters.join("-"));
