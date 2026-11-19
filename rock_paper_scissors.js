function getComputerChoice() {
    // generate a number between 1 to 3 for choices : rock paper scissors
    let choice = Math.floor(Math.random() * 3) + 1;

    // If choice is 1 we will use rock as a choice
    // If choice is 2 we will use paper as a choice
    // Otherwise we will use scissors as a choice

    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {

    let choice = prompt("Make your choice: rock, paper or scissors");
    choice = choice.toLowerCase();
    
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else {
        return "Please enter a valid choice";
    }
}

let humanScore = 0;
let computerScore = 0;

let rounds = 0;

function playRound(humanChoice, computerChoice) {

    // if human choice and computer choices are same then it's a tie
    if (humanChoice === computerChoice) {
        console.log(`It is a tie ${humanChoice} and ${computerChoice}`);
    } else if( (humanChoice === "rock" && computerChoice === "scissors" )
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")
     ) {
        humanScore ++;
        console.log(`You win!!! ${humanChoice} wins against ${computerChoice}`);

    } else {
        computerScore ++;
        console.log(`You lose! ${computerChoice} wins against ${humanChoice}`);
    }
}

function playGame() {
    while (rounds < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        rounds++;
    }

    if (humanScore > computerScore) {
        console.log("You win!! Hurreyyyy");
    } else if (humanScore == computerScore) {
        console.log("Tie");
    } else {
        console.log("Oops, try next time.");
    }

    console.log("Human scores: ", humanScore);
    console.log("Computer scores: ", computerScore);
}

playGame();
