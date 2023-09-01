#!/usr/bin/env node

import inquirer from "inquirer";
import { sum } from "./operations.js";
import { subtraction } from "./operations.js";
import { multiplication } from "./operations.js";
import { division } from "./operations.js";
let answer = await inquirer.prompt([
    {
        message: "enter your first number",
        type: "number",
        name: "num1"
    },
    {
        message: "enter your second number",
        type: "number",
        name: "num2"
    },
    {
        message: "select operator",
        type: "list",
        choices: ["+", "-", "*", "/", "%"],
        name: "operator"
    }
]);
let result;
switch (answer.operator) {
    case "+":
        result = sum(answer.num1, answer.num2);
        break;
    case "-":
        result = subtraction(answer.num1, answer.num2);
        break;
    case "*":
        result = multiplication(answer.num1, answer.num2);
        break;
    case "/":
        result = division(answer.num1, answer.num2);
        break;
    case "%": // Handle "%" operator
        result = answer.num1 % answer.num2;
        break;
}
console.log("Result:", result);
