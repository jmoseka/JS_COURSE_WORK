//run function without assigning to a variable
//immediately invoked funcion expression
(function () {
  console.log("This function will never run");
  const isPrivate = 23;
}); //();

//(() => console.log("This function will also never run"))();

//modern js can also do
{
  const isPrivate = 46;
  var notPrivate = 37;
}
//console.log(notPrivate);

////////////////CLOSURES//////

//function returning another function
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//while secure booking function is called and its gone
//its inner function is still able to access the passengercount
//and make the updates
const booker = secureBooking();

//closure makes function remember all the variables that existed
//intially

/*booker();
booker();
booker();
*/
//MORE EXAMPLES
//EXAMPLE ONE

let f;
const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
/*g();
f();
h();
f();*/
//46

//example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups. each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`We will start boading in ${wait} seconds`);
};
boardPassengers(180, 3);
const perGroup = 1000;
boardPassengers(180, 3);
