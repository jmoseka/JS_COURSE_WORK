const calcTip = function(bill){
   if(bill >=50 && bill <= 300)
   {
       return bill * 0.15;
   }
   else {
       return bill * 0.2;
   }
}
const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]), 
    calcTip(bills[2])
];

const totals = [
    (tips[0] + bills[0]),
    (tips[1] +bills[1]),
    (tips[2] +bills[2])
];

console.log(`Tips: ${tips} 🤑`);
console.log(`Bills: ${bills} 🤑`);
console.log(`Total money: ${totals} 🤑`);
