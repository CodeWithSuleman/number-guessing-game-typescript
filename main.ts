#! /usr/bin/env node

import inquirer from "inquirer"


//1)computer will generatee a random number
//2)user input for guessing number
//3)compare user input with computer generated numberr and show the result

let randomNumber = Math.floor(Math.random() * 4 + 1);


const answers = await inquirer.prompt(
   [
      {
         name: "userNum", type: "number", message: "Please guess a number between 1 to 5: "
      }]);

if (answers.userNum === randomNumber) {
   console.log("congratzz You are guessed a right nuumber");
} else {
   console.log(" You are guessed a wrong nuumber");
}