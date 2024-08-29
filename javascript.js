function getComputerChoise() {
  let choise = Math.floor(Math.random() * 3);
  switch (choise) {
    case 0:
      return "rock";

    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "What an unexpected number";
  }
}
