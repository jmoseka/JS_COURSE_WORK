const airline = "Tap Air Portugal";
const plane = "A320";
//console.log(plane[0]);
//can read length

//METHODS
//INDEX OF
//console.log(airline.indexOf("a"));
//LAST INDEX OF
//console.log(airline.lastIndexOf("a"));
//SEARCH FOR WORD
//console.log(airline.indexOf("Kenya"));

//Extract part of strings using slice method

//new substring
//begin
//console.log(airline.slice(4));

//end
//console.log(airline.slice(4, 7));
//first word
//console.log(airline.slice(0, airline.indexOf(" ")));

//last word
//console.log(airline.slice(airline.lastIndexOf(" ") + 1));

//console.log(airline.slice(-2));
//al
//console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("Middle seat");
  } else {
    console.log("You got lucky");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
