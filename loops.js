/*
----------------------------
For Loops
----------------------------
// most common loop

var todos = [
    "Clean room",
    "Brush teeth",
    "exercise",
    "study JS",
    "eat healthy"
];

var todosLengthj = todos.length;

for (var i=0; i < todos.length; i++){
    todos[i] = todos[i] + "!";
}

todos;

---------------------------
While Loops
---------------------------
var counterOne = 10;

while (counterOne > 0){
    console.log(counterOne);
    counterOne--;
}

---------------------------
Do Loops
---------------------------
// The do loop will run its condition and check it before the while loop runs 

var counterTwo = 10;
do{
    console.log(counterTwo);
    counterTwo--;
}
while (counterTwo > 0);

---------------------------
forEach Loop
---------------------------
var todos = [
    "Clean room",
    "Brush teeth",
    "exercise",
    "study JS",
    "eat healthy"
];

function logTodos(todo, i){
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

todos;

*/
