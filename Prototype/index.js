// node Prototype/index.js

const scout = require("./scout");

const vinit = scout.clone("Vinit");
vinit.possesses("Compass");

const harshita = scout.clone("Harshita");
harshita.possesses("Torch Light");

console.log(`${vinit.name} has ${vinit.possessions}`);
console.log(`${harshita.name} has ${harshita.possessions}`);