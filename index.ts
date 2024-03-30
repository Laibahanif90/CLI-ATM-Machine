#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000; //dollars
let myPin = 1211;

let pinAnswer = await inquirer.prompt(
    [
        {
            name : "pin",
            message : "enter your pin",
            type : "number",
        },
    ]
)  
  console.log(pinAnswer);

  if (pinAnswer.pin === myPin) {
    console.log(`Your pin is correct`);
    console.log(`Welcome to the ATM services`);

    let operationAns = await inquirer.prompt(
        [
            {
                name : "operation",
                message : "please select option",
                type : "list",
                choices : ["Withdraw","FastCash","Check Balance"],
            },
       ]
    )
    console.log(operationAns);

    if (operationAns.operation === "Withdraw") {
        let withdrawAmount = await inquirer.prompt(
            [
                {
                    name : "amount",
                    message : "please enter amount",
                    type : "number",
                },
            ]
        )
        if (myBalance >= withdrawAmount.amount) {
            myBalance -= withdrawAmount.amount;
            console.log(`You successfully withdraw your amount. Your remaining balance is ${myBalance}`);
        } else {
            console.log(`Insufficient Balance`);
        }
     } else if (operationAns.operation === "FastCash") {
          let fastCash = await inquirer.prompt(
            [
               {
                name : "FastCash",
                message : "please select option",
                type : "list",
                choices : ["2000",
                           "3000",
                           "4000",
                           "6000",
                           "8000",
                           "9000"],
               }
            ]
          )
          if (myBalance >= fastCash.FastCash) {
            myBalance -= fastCash.FastCash;
            console.log(`Your remaining balance is ${myBalance}`);
          } else {
            console.log(`Insufficient Balance`);
          }
      } else if (operationAns.operation === "Check Balance") {
        console.log(`Your total balance is ${myBalance}`);
      }
    } else {
        console.log(`Your pin is wrong....`);
    };