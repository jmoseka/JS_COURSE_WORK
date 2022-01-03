///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');
// Call method
book.call(eurowings, 23, "Sarah Williams");
book.call(lufthansa, 239, "Mary Cooper");
//console.log(eurowings);
//console.log(lufthansa);

const swiss = {
  airline: "Swiss Airline",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
//console.log(swiss);

//apply method - rarely used. call can achieve the same thing
/*const flighData = [583, "George Tarzan"];
book.apply(swiss, flighData);

book.call(swiss, ...flighData);*/

////////BIND METHOD - IMPORTANT
const bookEW = book.bind(eurowings);
const bookSwiss = book.bind(swiss);
const bookLuf = book.bind(lufthansa);
bookLuf(892, "Lina Lufthansa");
bookSwiss(891, "Swiss Nana");
bookEW(890, "Euro Bel");

//more ways of bind - allow to set in stones arguments
//can do const bookEW23 = book.bind(eurowings, 23, "moseka");
//called partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Raya EW23");
console.log(eurowings);

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};
