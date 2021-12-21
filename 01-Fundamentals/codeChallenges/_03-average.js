let dMarkOne = 96;
let dMarkTwo = 108;
let dMarkThree = 89;

let kMarkOne = 88;
let kMarkTwo = 91;
let kMarkThree = 110;

dAverage = (dMarkOne + dMarkTwo + dMarkThree) / 3;
kAverage = (kMarkOne + kMarkTwo + kMarkThree) / 3;
const dWon = dAverage >= 100;
const kWon = kAverage >= 100;

if (dAverage === kAverage && dWon && kWon)
{
    console.log(`Dolphins ${dAverage} draw with Koalas ${kAverage}`);
}
else if (dAverage > kAverage  && dWon)
{
    console.log(`Dolphins ${dAverage} won over Koalas ${kAverage}`);
}
else if (kAverage > dAverage  && kWon)
{
    console.log(`Koalas ${kAverage} won over Dolphins ${dAverage}`);
}
else 
{
    console.log("Score to low to be graded");
}