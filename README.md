# Rock-Paper-Scissors-game

1. create function getComputerChoice

The computer must chose between 3 values rock, paper, scissors. For this we need to apply the Math.Random () method who normally returns a number between 0 and 1, but now the computer must chose between rock, paper and scissors so we have to use also the Math.floor method to increase the number range to 3.
Now we have to find a way to give the computer the 3 values to chose from.

2. create function getHumanChoice

For this we need to create a variable with the value prompt method to display the options to choose from.
There are 3 possible values to chose from and a forth one in case of player writes something else.

3. Create two variables for score in the global scope: humanScore and computerScore with the initial value 0.

4. Write the logic to play one round

In this section we must declare all possible outcomes of the game:
rock>scissors
paper>rock
scissors>paper
Also in the return statement we need to include the outcome
