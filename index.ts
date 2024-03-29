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
                choices : ["Withdraw","Check Balance","Fast Cash"],
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
        if (withdrawAmount.amount > myBalance) {
            console.log(`Insufficient Balance`);
        } else {
            myBalance -= withdrawAmount.amount;
            console.log(`You successfully withdraw your amount. Your remaining balance is ${myBalance}`);
        }
    }   else if (operationAns.operation === "Check Balance") {
        console.log(`Your remaining balance is ${myBalance}`);
    }   else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt(
            [
                {
                    name : "amount",
                    message : "please enter amount",
                    tyoe : "list",
                    choices : ["2000","4000","6000","8000","10000"],
                },
            ]
        )
        myBalance -= fastCash.amount;
        console.log(`Your remaining balance is ${myBalance}`);
    }
}    else {
    console.log(`Your pin is incorrect,Please try again...`);
};