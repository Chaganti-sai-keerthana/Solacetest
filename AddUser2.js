const fs = require("fs");
 
// STEP 1: Reading JSON file
const users = require("./usernew1.json");

// Defining new user
let user = {
    name: "Saps1",
    age: 25,
    language: ["Node", "React", "Graphql"]
};

// Defining a another new user
let user1 = {
    name: "Saps2",
    age: 35,
    language: ["MSA","Graphql"]
};

// STEP 2: Adding new data to users object
users.unshift(user);
users.push(user1);

// STEP 3: Writing to a file
fs.writeFile("Usernew1.json", JSON.stringify(users), err => {

    // Checking for errors
    if (err) throw err;

    console.log("Done writing"); // Success
});