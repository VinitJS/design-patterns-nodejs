// node Adapter/index.js

const localStorage = require("./localstorage");

console.log("Length: ", localStorage.length);
console.log("Value of a: ", localStorage.getItem("a"))
console.log("Value of b: ", localStorage.getItem("b"))
localStorage.setItem("b", 2);
console.log("Length: ", localStorage.length);
// localStorage.clear();