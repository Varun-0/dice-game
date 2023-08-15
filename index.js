// Dice1
var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
var num1 = randomNumber1.toString();
document.querySelector(".img1").setAttribute("src","images/dice"+num1+".png");

//Dice 2
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
var num2 = randomNumber2.toString();
document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png");

//Winner Checker
if(randomNumber1 > randomNumber2){
    document.querySelector('.winner').textContent="Player One Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector('.winner').textContent= "Player Two Wins";
}
else{
    //Draw
    document.querySelector('.winner').textContent ="It's a Draw!" ;
}