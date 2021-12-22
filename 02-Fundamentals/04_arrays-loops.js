"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
};

for (let i = 0; i < bills.length; i++) {
  tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
