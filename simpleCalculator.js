/*
-------------------------------------------------
More Complex calculator
-------------------------------------------------

What we need:

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

// BONUS: Make a program that can subtract, multiply, and also divide!

How we do it:
1. Prompt the user if they want to add, subtract, multiply, or divide
2. Take their response and store it as a variable.
3. Prompt the user to input two numbers
4. Have the two numbers get stored as variables that will interact with the users first choice.
5. Alert the users of their answer

Code:
*/
alert("Instructions for calculator: \n 1. You will enter two numbers \n 2. Then you will choose your operator \n 3. Your answer will be displayed");

var first = prompt("Enter first number");
var second = prompt("Enter second number");

var expression = prompt("From your two numbers, would you like them: \n (1) Added (2) Subtracted (3) Divided (4) Multiplied");

if (expression == 1){
    var sum = Number(first) + Number(second);
}
else if(expression == 2){
    var sum = Number(first) - Number(second);
}
else if(expression == 3){
    var sum = Number(first) / Number(second);
}
else if(expression == 4){
    var sum = Number(first) * Number(second);
}

alert(sum);
