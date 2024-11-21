function diceRoll(){
    let results = Math.round(Math.random() * 5 + 1);
    return results;
}

function gameRoll(){
    let player1Score = diceRoll();
    let player2Score = diceRoll();
    let diceImage1;
    let diceImage2;

    if(player1Score == 1){
        diceImage1 = "./images/dice1.png";
    }else if(player1Score == 2){
        diceImage1 = "./images/dice2.png";
    }else if(player1Score == 3){
        diceImage1 = "./images/dice3.png";
    }else if(player1Score == 4){
        diceImage1 = "./images/dice4.png";
    }else if(player1Score == 5){
        diceImage1 = "./images/dice5.png";
    }else if(player1Score == 6){
        diceImage1 = "./images/dice6.png";
    }   
    
    if(player2Score == 1){
        diceImage2 = "./images/dice1.png";
    }else if(player2Score == 2){
        diceImage2 = "./images/dice2.png";
    }else if(player2Score == 3){
        diceImage2 = "./images/dice3.png";
    }else if(player2Score == 4){
        diceImage2 = "./images/dice4.png";
    }else if(player2Score == 5){
        diceImage2 = "./images/dice5.png";
    }else if(player2Score == 6){
        diceImage2 = "./images/dice6.png";
    }   

    if(player1Score > player2Score){
        document.querySelector("h1").textContent = "Player 1 Wins!";
        document.querySelector("p.score1").textContent = player1Score;
        document.querySelector("p.score2").textContent = player2Score;
        document.querySelector(".img1").setAttribute("src", diceImage1);
        document.querySelector(".img2").setAttribute("src", diceImage2);
        console.log(player1Score);
        console.log(player2Score);
    }
    else if (player2Score > player1Score){
        document.querySelector("h1").textContent = "Player 2 Wins!";
        document.querySelector("p.score1").textContent = player1Score;
        document.querySelector("p.score2").textContent = player2Score;
        document.querySelector(".img1").setAttribute("src", diceImage1);
        document.querySelector(".img2").setAttribute("src", diceImage2);
        console.log(player1Score);
        console.log(player2Score);
    }
    else{
        document.querySelector("h1").textContent = "Draw! Roll Again!";
        document.querySelector("p.score1").textContent = player1Score;
        document.querySelector("p.score2").textContent = player2Score;
        document.querySelector(".img1").setAttribute("src", diceImage1);
        document.querySelector(".img2").setAttribute("src", diceImage2);
        console.log(player1Score);
        console.log(player2Score);
    }

}