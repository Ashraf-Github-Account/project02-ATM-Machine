import inquirer from "inquirer";
// initialize user balance and pin code
let myBalace = 5000;
let myPin = 1234;
// Print welcome message
console.log("welcome to Muhammad Ashraf - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin code : "
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, Login Successful!");
    //   console.log(`Current Account Balance is ${myBalace}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an Opertion",
            choices: ["Withdraw Amount", "check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw: "
            }
        ]);
        if (amountAns.amount > myBalace) {
            console.log("Insufficient Balance");
        }
        else
            myBalace -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalace}`);
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`Your Account Balance is : ${myBalace}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again! ");
}
