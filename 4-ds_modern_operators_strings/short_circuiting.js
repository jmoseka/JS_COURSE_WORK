const restaurant = {
  name: "Odhis",
};
console.log("======OR=====");

//or short circuiting
const guest1 = restaurant.numGuest | 10;
console.log(guest1);

console.log("======AND=====");
//evaluation continues untill a falsy value is reached else the last true value is logged
