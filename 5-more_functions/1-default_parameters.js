"use strict";
const bookings = [];
const createBooking = function (
  flightNum = "AB123",
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

createBooking("LH123");
//To skip a parameter
createBooking("YT683", undefined, 34);
