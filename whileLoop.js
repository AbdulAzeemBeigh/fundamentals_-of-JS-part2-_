let rep = 1;
while(rep<=6){
    console.log(`WHile loop ${rep}`);
    rep ++;
}

let dice =(Math.random()*6) +1;

while (dice !=6){
    console.log(`you rolled a dice ${dice}`);
    dice = Math.trunc((Math.random()*6)) +1;
}