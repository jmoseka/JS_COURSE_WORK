const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io \n";

// step 1: convert to lowercase
// remove whitespaces
//trim start and trim end
const normalizeEmail = loginEmail.toLowerCase().trim();

//replacing
const priceGB = "288,87e";
const priceUS = priceGB.replace("e", "$").replace(",", ".");
//console.log(priceUS);

const myName = "All passengers come to door boarding 23. Boarding door 23!";
//console.log(myName.replace("door", "gate"));
//replace all occurences of door
//console.log(myName.replace(/door/g, "gate"));

//RETURN BOOLEAN -INCLUDE, STARTS WITH, END WITH

//SPLIT

//const str = "A+very +nicething";
//console.log(str.split("+"));
const [firstName, lastName] = "Jamila Moseka".split(" ");

const newName = ["Miss", firstName, lastName].join(" ");
//console.log(newName);

const camelCase = function (name) {
  const s = name.split(" ");
  const nameUpper = [];
  for (const x of s) {
    nameUpper.push(x.replace(x[0], x[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};

camelCase("jamila moseka");

//padding
const maskCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  console.log(last.padStart(str.length, "*"));
};

maskCard(64637836);

//repeat
const message = "Bad weather...All Departures Delayed...";
console.log(message.repeat(5));
