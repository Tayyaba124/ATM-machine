#! /usr/bin/env node
import inquirer from "inquirer";
//initialize user balance and pin code
let myBalance = 8000;
let mypin = 78910;
//pin welcome message
console.log("welcome to code with laiba -ATM machine");
// print welcome message
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code:"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("pin is correct,login sucessfully!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationAnswer.operation === "withdraw amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawmethod",
                type: "list",
                message: "select a withdraw method:",
                choices: ["fast cash", "Enter amount"]
            }
        ]);
        if (withdrawAns.withdrawmethod === "fast cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select Amount:",
                    choices: [1000, 2000, 5000, 8000, 7000, 10000, 15000, 20000]
                }
            ]);
            if (fastCashAns.fastcash > myBalance) {
                console.log("insufficient balance");
            }
            else {
                myBalance -= fastCashAns.fastcash;
                console.log(`${fastCashAns.fastcash} withdraw successfully`);
                console.log(`your remaining balance is :${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawmethod === "Enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`your remaining balace is :${myBalance}`);
            }
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`your account balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect,piease try again");
}
