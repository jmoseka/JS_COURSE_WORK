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
console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: "Swiss Airline",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

//apply method - rarely used. call can achieve the same thing
const flighData = [583, "George Tarzan"];
book.apply(swiss, flighData);

book.call(swiss, ...flighData);
