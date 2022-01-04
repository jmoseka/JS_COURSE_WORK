const currencies = new Map([
  ["USD", "US Dollars"],
  ["EUR", "Euro"],
  ["KES", "KE shillings"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//set
const curreciesUnique = new Set(["USD", "EURO", "USD", "KES"]);

curreciesUnique.forEach(function (value, map) {
  //key is same as value
  console.log(`${value}`);
});
