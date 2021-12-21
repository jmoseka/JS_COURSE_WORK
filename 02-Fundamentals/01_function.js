const calcAverage  = (a, b, c) => (a+b+c)/3;
function checkWinner(a, b){
    a > (b*2) ?
    console.log(`Dolphin wins (${a} vs ${b})😎`)
    : b > (a*2) ? console.log(`Koala wins (${b} vs ${a})😎`)
    : console.log(`No winner 😪`)
}
let avgDolphin = calcAverage(85, 54, 41);
let avgsKoala = calcAverage(23, 34, 27);

console.log(avgDolphin, avgsKoala);
checkWinner(avgDolphin, avgsKoala);


