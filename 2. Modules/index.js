// Modules are used to transfer the code from one file to another file

// Step 1 -->
// first we need to export the code which we want from that file
// Syntax - module.exports = function name

// Step 2 -->
// import that file using require()
// Syntax - const name = require('filename');

const greet = require("./greet");
const { person1, person2, person3 } = require("./people");
console.log(person1);
console.log(person2);
console.log(person3);

greet(person1);
