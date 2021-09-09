/*
There are two ways of creating functions

1. Simple Function Declaration:

function sayHello(){
    console.log("Hello");
}

sayHello();

2. Function Expression aka anonymous function

var sayBye = function(){
    console.log("Bye");
}

sayBye();

---------------------------------
Examples
---------------------------------

function sing(){
    console.log("Ahhhhhhhhhhh");
    console.log("Teeeeeeeeheeee");
}

sing();

function sing2(){
    console.log("Laaaadeee");
    console.log("Daaaaaadaa");
}

sing2();

// more efficient solution with an argument

function sing(song){
    console.log(song);
}

sing("Ahhhhhhhhhhh");
sing("Teeeeeeeeheeee");
sing("Laaaadeee");
sing("Daaaaaadaa");

// another example
// functions are variables

function multiply(a, b){
    if(a > 10 || b > 10){
        return "that is too hard!"
    }
    else{
        return a * b; //return will be the final way to end a function, so return will exit the function once the line containing return is ran. If statements can prioritize the return statement that is executed.
    }
    return a * b;
}

alert(multiply(5, 10));

------------------------------
Keyless Car 2.0
------------------------------
// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). 
//Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. 
//Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!"

code:

function checkDriverAge(){
    var age = prompt("How old are you?");
    if (age < 18) {
	    alert("Sorry, you are too yound to drive this car. Powering off");
    } 
    else if (age > 18) {
	    alert("Powering On. Enjoy the ride!");
    } 
    else if (age == 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge();

code 2:

var checkDriverAge = function(){
    var age = prompt("How old are you?");
    if (age < 18) {
	    alert("Sorry, you are too yound to drive this car. Powering off");
    } 
    else if (age > 18) {
	    alert("Powering On. Enjoy the ride!");
    } 
    else if (age == 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge();

Bonus Code:

var checkDriverAge = function(age){
    return console.log("Powering On. Enjoy the ride!")
}

checkDriverAge(92);

*/
