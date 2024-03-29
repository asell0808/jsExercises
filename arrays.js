/*
---------------------------
Arrays
---------------------------
var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);

// arrays index from 0,1,2,3... and so on
// arrays have built in methods

list.shift();

list.pop();

list.push("elephant");

list.concat(["bee", "deer"]);

list.sort();

var myList = ["cat", "bear", "elephant", "bee", "deer"];
var myNewList = myList.concat(["monkey"]);

--------------------------
Exercises
--------------------------
// Resources: https://www.w3schools.com/jsref/jsref_obj_array.asp
// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

you should have at the end:
["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

Code:
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array.push("kiwi");
array.shift();
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][1][0];

*/
