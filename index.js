//refresh page on button
const refresh = () =>{
    window.location.reload();
}

//Random number1 + function to create img src with random number
const number1 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img1").src = `images/dice${number1}.png`;

//Random number2 + function to create img src with random number
const number2 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img2").src = `images/dice${number2}.png`;

//Showing result who won! (p1 / p2 / draw)
if (number1 > number2) {
    document.querySelector(".result").innerHTML = "Player1 Wins!";
} else if (number1 < number2) {
    document.querySelector(".result").innerHTML = "Player2 Wins!";
} else {
    document.querySelector(".result").innerHTML = "DRAW!";
}