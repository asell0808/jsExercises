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

*/
