function random(){
    var r = Math.random()*6 + 1;
    return Math.floor(r);
}
var left = random();
var right = random();
function dices(i,key){
    document.querySelectorAll(".Dice")[i].src = `images/dice${key}.png`; 
}
dices(0,left);
dices(1,right);
if(left>right){
    document.querySelector("h1").innerHTML = "<img class='flag' src='images/flag.png'> Player 1 Wins";
}
else if(left<right){
    document.querySelector("h1").innerHTML = "<img class='flag' src='images/flag.png'> Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "<img class='flag' src='images/flag.png'> DRAW";
}