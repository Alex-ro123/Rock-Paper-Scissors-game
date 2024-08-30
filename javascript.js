function getComputerChoice () {
  let choice = Math.floor(Math.random()*3);
  
  if (choice==='rock') {
    return 'rock';
  } else if (choice==='paper') {
    return 'paper';
  } else (choice ==='scissors') {
    return 'scissors';
  }
}