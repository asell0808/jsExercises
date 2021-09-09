/*
---------------------------
Objects
---------------------------

// object with an array and function inside it
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells:["abrakadra", "shazam", "boo"],
    shout: function(){
        console.log("RAAAAAAAAAAAAH!");
    }
};

// modifying the object
user.name;

user.favoriteFood = "Spinach";

user.isMarried = true;

// object array
var list = [
    {
        username: "andy",
        password: "password"
    },
    {
        username: "grigsby",
        password: "123456"
    }
];

// objects and arrays can be empty
var user2 = {};

var array = array[];

--------------------------
Simple Facebook
--------------------------
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

{
    username: "Ralphie",
    password: "thisIsAPassword",
};

var database = [
    {
        username: "Ralphie",
        password: "thisIsAPassword",
    }
];

var newsfeed = [
    {
        username: "Rick",
        timeline: "Here is your timeline",
    },
    {
        username: "Mina",
        timeline: "Here is your timeline",
    },
    {
        username: "Alfred",
        timeline: "Here is your timeline",
    }
];

------------------------
Simple Facebook 2
------------------------
var database = [
    {
        username: "andrei",
        password: "supersecret"
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

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass){
    if (user == database[0].username && pass == database[0].password){
        console.log(newsfeed);
    }
    else{
        alert("Sorry, your username and password were incorrect.")
    }
}

signIn(userNamePrompt, passwordPrompt);

*/
