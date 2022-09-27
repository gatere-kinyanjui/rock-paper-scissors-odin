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
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("it's a tie! try again.");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection !== "paper") {
        console.log("you lose! paper beats rock.");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log("you win! rock crushes scissors");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log("you win! paper beats rock.");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log("you lose! scissors butcher paper");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log("you lose! rock crushes scissors");
    } else (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper");
    console.log("you win! scissors butcher paper");
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(arr);
console.log(singleRound(playerSelection, computerSelection));




// 3. play multiple rounds
function game() {
    for (let i = 0; i < arr.length; i++) {
        console.log(singleRound(playerSelection, computerSelection))
    }
}

console.log(game());