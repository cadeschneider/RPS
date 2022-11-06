//Set Zero Score
let tie = 0;
let won = 0;
let lost = 0;

//Clears Score
function restartGame(){
    tie = 0;
    won = 0;
    lost = 0;
}

//Retrieve Computer Selection Option
function getComputerChoice() {
    choices = Array("ROCK", "PAPER", "SCISSORS")
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log("The computer chooses: " + choice);
    return choice;
}

//Runs 1 round of rock, paper, scissors
function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === "ROCK"){
        if (computerSelection === "ROCK"){
            console.log("tie");
            return("TIE");
        }else if (computerSelection === "PAPER"){
            console.log("Paper beats rock, you lose");
            return("LOSE");
        }else if (computerSelection === "SCISSORS"){
            console.log("Rock beats scissors. You win");
            return("WIN");
        }else{
            console.log("Invalid");
        }
    }else if (playerSelection.toUpperCase() === "PAPER"){
        if (computerSelection === "ROCK"){
            console.log("Paper beats rock, you win");
            return("WIN");
        }else if (computerSelection === "PAPER"){
            console.log("Tie");
            return("TIE");
        }else if (computerSelection === "SCISSORS"){
            console.log("Scissors beats paper. You lose");
            return("LOSE");
        }else{
            console.log("Invalid");
        }
    }else if (playerSelection.toUpperCase() === "SCISSORS"){
        if (computerSelection === "ROCK"){
            console.log("Rock beats scissors. You lose");
            return("LOSE");
        }else if (computerSelection === "PAPER"){
            console.log("Scissors beats paper, you win");
            return("WIN");
        }else if (computerSelection === "SCISSORS"){
            console.log("tie");
            return("TIE");
        }else{
            console.log("Invalid");
        }
    }else{
        console.log("Invalid");
    }
};

//Set event listener for each image       
const img = document.querySelectorAll('img');
img.forEach(item => item.addEventListener('click', event => { 
    
    const imgSel = document.querySelectorAll('img');
    imgSel.forEach(item => item.removeAttribute('id'))

    let computer_choice = getComputerChoice();
    let imgC = document.querySelector(`img[alt="${computer_choice}"]`);

    item.setAttribute('id','HumanSelected');
    imgC.setAttribute('id','ComputerSelected');
    
    result = playRound(item.getAttribute("alt"),computer_choice);
    
    const divP = document.querySelector('#Player');
    const divC = document.querySelector('#Computer');
    const divO = document.querySelector('#Outcome');

    //Running Sum of score
    if (result === "TIE"){
        tie = tie+1;
        divO.style.color = 'grey'
        item.removeAttribute('id')
        imgC.removeAttribute('id')
        item.setAttribute('id', 'Tie');
    }else if (result === "WIN"){
        won = won+1;
        divO.style.color = 'green'
    }else{
        lost = lost+1;
        divO.style.color = 'red'
    };

    //Edit Score Board
    divP.textContent = `PLAYER: ${won}`
    divC.textContent = `BOT: ${lost}`
    divO.textContent = `${result}`

    //Check if someone has won
    if (won >= 5){

         Swal.fire({text: `PLAYER WINS\n ${won} - ${lost}`})
         restartGame();
         divP.textContent = `PLAYER: ${won}`
         divC.textContent = `BOT: ${lost}`

    }else if (lost >= 5){
    
         Swal.fire(`BOT WINS\n ${won} - ${lost}`)
         restartGame();
         divP.textContent = `PLAYER: ${won}`
         divC.textContent = `BOT: ${lost}`

    }else{
        divP.textContent = `PLAYER: ${won}`
        divC.textContent = `BOT: ${lost}`
    }

}));