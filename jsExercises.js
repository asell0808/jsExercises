/* 
JAVASCRIPT TYPES
-----------------
1. Number 
2. String
3. Boolean
4. Undefined
5. Null
<!-- 6. Symbol (new in ECMAScript 6) -->
7. Object

JAVASCRIPT COMPARISONS
-----------------

!==
===
>=
<=
>
<

JAVASCRIPT VARIABLES
-----------------
var
<!-- let (new in ECMAScript 6)-->  
<!-- const (new in ECMAScript 6)-->

JAVASCRIPT CONDITIONALS
-----------------
if
else
else if
<!-- ternary operator -->
<!-- switch -->

JAVASCRIPT LOGICAL OPERATORS
-----------------
&&
||
!

JAVASCRIPT FUNCTIONS
-----------------
var a = function name() {}
function name() {}
return
<!-- () => (new in ECMAScript 6) -->

JAVASCRIPT DATA STRUCTURES
-----------------
Array
Object

JAVASCRIPT LOOPING
-----------------
for
while
do 
forEach (new in ECMAScript 5) 

JAVASCRIPT KEYWORDS
-----------------
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield

-----------------------------------------------------
Exercises
-----------------------------------------------------
// Guess what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Once you have an answer  to the questions then 
// check them by copying them and running it in the console yourself line by line 

//Evaluate the below:
5 + "34"           39
5 - "4"            1
10 % 5             0
5 % 10             5
"Java" + "Script"  JavaScript
" " + " "          "  "
" " + 0            " 0"
true + true        1
true + false       1
false + true       1
false - true      -1
3 - 4             -1
"Bob" - "bill"    NaN

//Evaluate the below comparisons:
5 >= 1     True
0 === 1    True
4 <= 1     False
1 != 1     False
"A" > "B"  False
"B" < "C"  True
"a" > "A"  True
"b" < "A"  False
true === false  False 
true != true    False

// Make the string: "Hi There! It's "sunny" out" by using the + sign:
"Hi There! It's " + "\"sunny\" " + "out"
*/

/*
--------------------------------------------------
basic sum calculator:
--------------------------------------------------

var first = prompt("Enter first number");
var second = prompt("Enter second number");
var sum = Number(first) + Number(second);
alert(sum);

*/

/*
-------------------------------------------------
 More Exercises
-------------------------------------------------

// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then 
// check them by copying them and running it in the console yourself 
// line by line 


// add variable "firstName" and "lastName" // so that they equal your name
var firstName = "Anthony";
var lastName = " Sellers";
firstName + lastName;

// create a variable that holds the answer // of "firstName" + " " + "lastName"
var fullName = firstName + lastName;

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here

Answer: 23

// What is c equal to?
var c;

Answer: undefined

*/

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

var first = prompt("Enter first number");
var second = prompt("Enter second number");

var expression = prompt("From your two numbers, would you like them:                                   (1) Added (2) Subtracted (3) Divided (4) Multiplied")

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

*/
