#! /usr/bin/env node
import inquirer from "inquirer";
//initializing user balance and pin code.
let mybalance = 10000;
let myPin = 9876;
//printing welcome message
console.log("Welcome to User Musfira - ATM machine");
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin Code: "
    }
]);
if (pinanswer.pin === myPin) {
    console.log("Pin is correct, You've loggedin succesfully!");
    //console.log (`Current balance is ${mybalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["withdraw amount", "Balance inquiry"]
        }
    ]);
    if (operationAns.answer === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > mybalance) {
            console.log("Insufficient balance");
        }
        else {
            mybalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw succesfully.`);
            console.log(`Your remaining balance is ${mybalance}`);
        }
    }
    else if (operationAns.operation === "Balance inquiry")
        console.log(`Your account balance is ${mybalance}`);
}
else {
    console.log("Pin is incorrect, Try again!");
}
;
