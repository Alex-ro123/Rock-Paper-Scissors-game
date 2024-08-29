function getComputerChoise() {
  const choise = Math.floor(Math.random() * 3);
  switch (choise) {
    case 1:
      return "rock";

    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoise() {
  const choise = prompt("Chose rock, paper or scissors");

  if (choise === "rock") {
    return "rock";
  } else if (choise === "paper") {
    return "paper";
  } else if (choise === "scissors") {
    return "scissors";
  } else {
    return "What an unexpected number";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
