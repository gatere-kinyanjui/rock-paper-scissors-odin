// let arr = ["rock", "paper", "scissors"];

// function selectRandomWord(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// console.log(selectRandomWord(['elder', 'cheif', 'chairman']));

// console.log(arr.length);
// console.log(Math.random() * arr.length);
// console.log(Math.floor(Math.random() * arr.length));
// console.log(arr[Math.floor(Math.random() * arr.length)]);


// i. select a random choice from pc
const arr = ["rock", "paper", "scissors"];

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ii. pc & player play a single round


function singleRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("it's a tie! try again.");
    }
    if ((playerSelection.toLowerCase() === "rock" && computerSelection !== "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        console.log("you lose!");
    }
    if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
        console.log("you win!");
    }
}


