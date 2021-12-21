function calcAverage (a, b, c)
{
    (a+b+c)/3;
}
function checkWinner(a, b){
    a > (b*2) ?
    console.log(`Dolphin wins (${a} vs ${b}😎`)
    : b > (a*2) ? console.log(`Koala wins (${b} vs ${a}😎`)
    : console.log(`No winner 😪`)
}
let avgDolphin = calcAverage(44, 23, 71);
let avgsKoala = calcAverage(65, 54, 49);

checkWinner(avgDolphin, avgsKoala);


