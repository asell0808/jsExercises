/* 
---------------------------
facebook 3
---------------------------

// run in the console
*/

var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Roland",
        timeline: "Wow I love JS!"
    },
    {
        username: "Brock",
        timeline: "Wow I think JS is whack!"
    }
];

function isUserValid(username, password){
    for (var i = 0; i < database.length; i++){
        if(database[i].username == username && database[i].password == password){
            return true
        }
        
    }
    return false;
}

function signIn(username, password){
    if (isUserValid(username, password)){
        console.log(newsfeed);
    }
    else{
        alert("Sorry, wrong username and password.");
    }
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);

